import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import styles from './styles';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

interface Props {
  children?: React.ReactNode;
  snapMargins: {
    vertical: number;
    horizontal: number;
  };
  onClose?: () => void;
}

function SnapDraggable({children, snapMargins}: Props) {
  const [childrenSize, setChildrenSize] = useState({width: 0, height: 0});
  const translateX = useSharedValue(snapMargins.horizontal);
  const translateY = useSharedValue(windowHeight - snapMargins.vertical);

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {
      startX: number;
      startY: number;
    }
  >({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX;
      translateY.value = ctx.startY + event.translationY;
    },
    onEnd: event => {
      const width = windowWidth - snapMargins.horizontal - childrenSize.width;
      const height = windowHeight - snapMargins.vertical - childrenSize.height;
      const toss = 0.2;
      function clamp(value: number, min: number, max: number) {
        return Math.min(Math.max(value, min), max);
      }
      const targetX = clamp(
        translateX.value + toss * event.velocityX,
        0,
        width,
      );
      const targetY = clamp(
        translateY.value + toss * event.velocityY,
        0,
        height,
      );

      const top = targetY;
      const bottom = height - targetY;
      const left = targetX;
      const right = width - targetX;
      const minDistance = Math.min(top, bottom, left, right);

      let snapX = targetX;
      let snapY = targetY;
      switch (minDistance) {
        case top:
          snapY = snapMargins.vertical;
          break;
        case bottom:
          snapY = height;
          break;
        case left:
          snapX = snapMargins.horizontal;
          break;
        case right:
          snapX = width;
          break;
      }

      translateX.value = withSpring(snapX, {
        velocity: event.velocityX,
      });
      translateY.value = withSpring(snapY, {
        velocity: event.velocityY,
      });
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View
        style={[styles.container, animatedStyle]}
        onLayout={event =>
          setChildrenSize({
            width: event.nativeEvent.layout.width,
            height: event.nativeEvent.layout.height,
          })
        }>
        {children}
      </Animated.View>
    </PanGestureHandler>
  );
}

export default SnapDraggable;

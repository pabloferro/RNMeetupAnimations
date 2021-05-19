import React, {useEffect, useRef} from 'react';
import {View, Animated, TouchableWithoutFeedback} from 'react-native';
import Text from '../Text';
import styles from './styles';

interface Props {
  children?: React.ReactNode;
  visible: boolean;
  onClose: () => void;
}

const ENABLE_ANIMATED_TRANSLATE = false;

function MovingToast({children, visible, onClose}: Props) {
  const toastOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(toastOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }
  }, [toastOpacity, visible]);

  const handleClose = () => {
    Animated.timing(toastOpacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start(onClose);
  };

  return visible ? (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: toastOpacity,
          transform: [
            {
              translateY: ENABLE_ANIMATED_TRANSLATE
                ? toastOpacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -20],
                  })
                : -20,
            },
          ],
        },
      ]}>
      <TouchableWithoutFeedback onPress={handleClose}>
        <View style={styles.toast}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  ) : null;
}

export default MovingToast;

import React, {memo, useRef} from 'react';
import {Animated, StyleProp, ViewStyle, Dimensions} from 'react-native';
import {Course} from '../../interfaces';
import Text from '../Text';
import styles, {CARD_MARGIN} from './styles';

const CARDS_COUNT = 4.2;

interface Props {
  items: Course[];
  style?: StyleProp<ViewStyle>;
}
const {width: windowWidth} = Dimensions.get('window');

function Carousel({items, style}: Props) {
  const cardTotalWidth = windowWidth / CARDS_COUNT;
  const cardWidth = cardTotalWidth - CARD_MARGIN * 2;
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <Animated.FlatList
      contentContainerStyle={[styles.container, style]}
      horizontal
      data={items}
      snapToInterval={cardTotalWidth}
      showsHorizontalScrollIndicator={false}
      decelerationRate={0}
      snapToAlignment="center"
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                x: scrollX,
              },
            },
          },
        ],
        {
          useNativeDriver: true,
        },
      )}
      scrollEventThrottle={1}
      keyExtractor={({id}) => id}
      renderItem={({item, index}) => (
        <Animated.View
          style={[
            styles.itemContainer,
            {width: cardWidth},
            {
              transform: [
                {
                  scaleY: scrollX.interpolate({
                    inputRange: [
                      cardTotalWidth * (index - Math.floor(CARDS_COUNT) + 1),
                      cardTotalWidth *
                        (index - (Math.floor(CARDS_COUNT) - 1) / 2),
                      cardTotalWidth * index,
                    ],
                    outputRange: [0.8, 1, 0.8],
                    extrapolate: 'extend',
                  }),
                },
              ],
            },
          ]}>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.itemText}>
            {item.name}
          </Text>
        </Animated.View>
      )}
    />
  );
}

export default memo(Carousel);

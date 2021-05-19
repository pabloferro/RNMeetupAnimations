import React from 'react';
import {StyleProp, TouchableHighlight, ViewStyle} from 'react-native';
import Text from '../Text';
import styles from './styles';
import {brandPrimary} from '../../constants/colors';

interface Props {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

function Button({title, onPress, style}: Props) {
  return (
    <TouchableHighlight
      underlayColor={`${brandPrimary}E0`}
      onPress={onPress}
      style={[styles.container, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
}

export default Button;

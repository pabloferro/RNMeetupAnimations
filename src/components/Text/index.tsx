import React from 'react';
import {Text as RNText, TextProps} from 'react-native';
import styles from './styles';

interface Props extends TextProps {
  children: React.ReactNode;
}

function Text({style, ...props}: Props) {
  return <RNText style={[styles.text, style]} {...props} />;
}

export default Text;

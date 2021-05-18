import React from 'react';
import {View} from 'react-native';
import styles from './styles';

interface Props {
  children?: React.ReactNode;
}

function Template({children}: Props) {
  return <View style={styles.container}>{children}</View>;
}

export default Template;

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Text from '../Text';
import {white} from '../../constants/colors';
import styles from './styles';

interface Props {
  children: React.ReactNode;
  dark?: boolean;
}

function Layout({children, dark}: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor={white}
        barStyle={dark ? 'light-content' : 'dark-content'}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.title}>Animaciones</Text>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Layout;

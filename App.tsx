import React from 'react';
import {UIManager} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/index';

// Necesario para que funcione en android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const App = () => {
  return <HomeScreen />;
};

export default App;

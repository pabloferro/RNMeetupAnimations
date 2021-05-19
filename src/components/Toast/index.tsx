import React, {useEffect, useRef} from 'react';
import {Animated, TouchableOpacity} from 'react-native';
import Text from '../Text';
import styles from './styles';

interface Props {
  children?: React.ReactNode;
  visible: boolean;
  onClose: () => void;
}

function Toast({children, visible, onClose}: Props) {
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
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.container}
      onPress={handleClose}>
      <Animated.View style={[styles.toast, {opacity: toastOpacity}]}>
        <Text>{children}</Text>
      </Animated.View>
    </TouchableOpacity>
  ) : null;
}

export default Toast;

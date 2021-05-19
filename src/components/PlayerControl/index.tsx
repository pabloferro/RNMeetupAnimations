import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPause, faPlay} from '@fortawesome/free-solid-svg-icons';
import Text from '../Text';

interface Props {
  playing: boolean;
  duration: number;
  courseName: string;
  onPress: () => void;
}

const formatNumber = (number: number) => number.toString().padStart(2, '0');

function PlayerControl({playing, duration, courseName, onPress}: Props) {
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (playing && timeElapsed < duration) {
        setTimeElapsed(timeElapsed + 1);
      }
    }, 1000);

    return function cleanUp() {
      clearInterval(interval);
    };
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container]}>
        <FontAwesomeIcon
          style={styles.icon}
          icon={playing ? faPause : faPlay}
        />
        <Text>
          {courseName} {formatNumber(Math.floor(timeElapsed / 60))}:
          {formatNumber(timeElapsed % 60)}
          {' / '}
          {formatNumber(Math.floor(duration / 60))}:
          {formatNumber(duration % 60)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default PlayerControl;

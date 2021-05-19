import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  LayoutAnimation,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {Course} from '../../interfaces';

import Text from '../Text';

import styles from './styles';
interface Props {
  userName: string;
  avatar?: React.ReactNode;
  coursesInProgress: Course[];
  style?: StyleProp<ViewStyle>;
}

const ANIMATION_DURATION = 500;

function UserSection({userName, avatar, coursesInProgress, style}: Props) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    // Agregando solo esta línea podemos animar
    // los cambios de layout en el siguiente render
    // LayoutAnimation.easeInEaseOut();
    LayoutAnimation.configureNext({
      duration: ANIMATION_DURATION,
      update: {type: 'easeIn'},
      create: {type: 'linear', property: 'opacity', delay: ANIMATION_DURATION},
    });
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity style={style} onPress={toggleExpanded}>
      <View style={[styles.container, expanded && styles.containerExpanded]}>
        {avatar ? (
          avatar
        ) : (
          <View
            style={[
              styles.avatar,
              expanded && styles.avatarExpanded,
              styles.spacing,
            ]}
          />
        )}
        <Text style={[styles.userName, styles.spacing]}>{userName}</Text>
        <Text style={styles.spacing}>
          (Cursos Activos: {coursesInProgress.length})
        </Text>
        {expanded && <Text style={styles.signOut}>Cerrar sesión</Text>}
      </View>
    </TouchableOpacity>
  );
}

export default UserSection;

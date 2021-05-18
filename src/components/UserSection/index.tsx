import React, {useState} from 'react';
import {TouchableOpacity, Text, View, LayoutAnimation} from 'react-native';
import styles from './styles';

interface Props {
  userName: string;
  avatar?: React.ReactNode;
  coursesInProgress: string[];
}

function UserSection({userName, avatar, coursesInProgress}: Props) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    LayoutAnimation.configureNext({
      ...LayoutAnimation.Presets.easeInEaseOut,
      duration: 2000,
    });
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity
      style={[styles.container, expanded && styles.containerExpanded]}
      onPress={toggleExpanded}>
      <View style={[styles.container, expanded && styles.containerExpanded]}>
        {avatar ? avatar : <View style={styles.avatar} />}
        <Text>{userName}</Text>
        <View
          style={[
            styles.activeCourses,
            expanded && styles.activeCoursesExpanded,
          ]}>
          <Text>Cursos Activos:</Text>
          <View>
            {expanded ? (
              coursesInProgress.map(course => <Text>{course}</Text>)
            ) : (
              <Text>{coursesInProgress.length}</Text>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default UserSection;

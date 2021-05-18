import {StyleSheet} from 'react-native';

const AVATAR_WIDTH = 50;

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  containerExpanded: {
    flexDirection: 'column',
    paddingVertical: 50,
  },
  avatar: {
    height: AVATAR_WIDTH,
    width: AVATAR_WIDTH,
    borderRadius: AVATAR_WIDTH / 2,
    backgroundColor: 'grey',
  },
  activeCourses: {
    flexDirection: 'row',
  },
  activeCoursesExpanded: {
    flexDirection: 'column',
  },
});

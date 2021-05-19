import {StyleSheet} from 'react-native';
import {grey02, brandPrimary, grey01} from '../../constants/colors';

const AVATAR_WIDTH = 50;
const AVATAR_EXPANDED_WIDTH = 80;

export default StyleSheet.create({
  container: {
    backgroundColor: grey01,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  containerExpanded: {
    flexDirection: 'column',
  },
  avatar: {
    height: AVATAR_WIDTH,
    width: AVATAR_WIDTH,
    borderRadius: AVATAR_EXPANDED_WIDTH / 2,
    backgroundColor: grey02,
  },
  avatarExpanded: {
    height: AVATAR_EXPANDED_WIDTH,
    width: AVATAR_EXPANDED_WIDTH,
  },
  userName: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 18,
  },
  spacing: {
    margin: 5,
  },
  signOut: {
    color: brandPrimary,
  },
});

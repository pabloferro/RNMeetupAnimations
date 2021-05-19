import {StyleSheet} from 'react-native';
import {brandPrimary, white} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: brandPrimary,
    borderRadius: 10,
  },
  text: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 15,
    color: white,
  },
});

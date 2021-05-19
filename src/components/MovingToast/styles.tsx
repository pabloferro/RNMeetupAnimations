import {StyleSheet} from 'react-native';
import {black, white} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 50,
    right: 50,
    bottom: 10,
  },
  toast: {
    alignItems: 'center',
    backgroundColor: '#0061C4',
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: white,
    fontSize: 15,
    fontFamily: 'Nunito-SemiBold',
  },
});

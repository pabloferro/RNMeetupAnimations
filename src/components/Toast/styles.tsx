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
    padding: 20,
    backgroundColor: black,
    borderRadius: 10,
  },
  text: {
    color: white,
  },
});

import {StyleSheet} from 'react-native';
import {black, white} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: white,
    borderColor: black,
    borderWidth: 2,
    borderRadius: 10,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
  icon: {
    margin: 6,
  },
});

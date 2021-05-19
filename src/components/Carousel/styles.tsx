import {StyleSheet} from 'react-native';
import {black, white} from '../../constants/colors';

export const CARD_MARGIN = 5;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 180,
  },
  itemContainer: {
    justifyContent: 'center',
    margin: CARD_MARGIN,
    paddingHorizontal: 10,
    paddingVertical: 20,
    height: 180,
    backgroundColor: black,
    borderRadius: 10,
  },
  itemText: {
    fontFamily: 'Nunito-Bold',
    color: white,
    fontSize: 10,
  },
});

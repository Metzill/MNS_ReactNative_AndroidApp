import {StyleSheet} from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  shadow: {
    elevation: 20,
    shadowColor: Colors.black,
    shadowOpacity: 1,
    shadowRadius: 50,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

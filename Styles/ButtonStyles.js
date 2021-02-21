import { StyleSheet } from 'react-native';
import colors from './Colors';

export default StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    padding: 15,
    backgroundColor: colors.mainGreen,
    borderRadius: 4,
  },
  buttonNotFilled: {
    borderWidth: 2,
    borderColor: colors.mainGreen,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  title: {
    color: colors.mainLightGray,
    fontWeight: 'bold',
    letterSpacing: 4,
    textTransform: 'capitalize',
  },
  titleNotFilled: {
    color: colors.mainGreen,
  }
});
  
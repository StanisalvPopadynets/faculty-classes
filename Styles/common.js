import { StyleSheet } from 'react-native';
  
  export default StyleSheet.create({
    container: {
      margin: 20,
    },
    flex1: {
      flex: 1
    },
    androidSafeArea: {
      flex: 1,
      // backgroundColor: npLBlue,
      paddingTop: Platform.OS === 'android' ? 25 : 0,
      // paddingBottom: Platform.OS === 'android' ? 25 : 0
  },
  });
  
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export const SplashScreen = () => {
  return (
    <View style={styles.splashScreen}>
      <Icon name="loading1" size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  splashScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

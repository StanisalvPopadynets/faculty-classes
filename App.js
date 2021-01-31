
import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import { SignUp } from './Screens';
import AppStyles from './Styles/AppStyles';

const App = () => {
  return (
    <View style={AppStyles.appView}>
      <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
      <SignUp />
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;

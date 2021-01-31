
import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import reduxStore from './Redux/store';

import { SignUp, SignIn } from './Screens';
import AppStyles from './Styles/AppStyles';

const App = () => {
  return (
    <Provider store={reduxStore}>
      <View style={AppStyles.appView}>
        <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
        {/* <SignUp /> */}
        <SignIn />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;

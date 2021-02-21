
import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import reduxStore from './Redux/store';
import { SignUp, SignIn } from './Screens';
import AppStyles from './Styles/AppStyles';

const Stack = createStackNavigator();


const App = () => {
  return (
    <Provider store={reduxStore}>
      <NavigationContainer>
        <View style={AppStyles.appView}>
          <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;

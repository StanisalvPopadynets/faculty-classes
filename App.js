import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';

import configureStore from './Redux/store';
import AppStyles from './Styles/AppStyles';
import {SplashScreen} from './Components';
import Routes from './Routes';

const {reduxStore, persistor} = configureStore();

const App = () => {
  const [isGateLifted, setIsGateLifted] = React.useState(false);

  const onBeforeLift = () => {
    // Take an action before the gate lifts
    setTimeout(() => {
      setIsGateLifted(true);
    }, 1000);
  };

  return (
    <Provider store={reduxStore}>
      <PersistGate onBeforeLift={onBeforeLift} persistor={persistor}>
        {!isGateLifted ? (
          <SplashScreen />
        ) : (
          <NavigationContainer>
            <View style={AppStyles.appView}>
              <StatusBar
                translucent
                barStyle="dark-content"
                backgroundColor="transparent"
              />
              <Routes />
            </View>
          </NavigationContainer>
        )}
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;

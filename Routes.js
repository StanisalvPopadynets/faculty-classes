import React from 'react';
import { Text } from 'react-native'
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SignUp, SignIn, HomeScreen } from './Screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {

  const {currentUser} = useSelector(state => state.user)
  console.log(currentUser)
  return (
    <>
    {
      currentUser
        ?
          <Tab.Navigator tabBarOptions={{activeBackgroundColor: 'red'}}>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Feed" component={() => <Text>ASDASD</Text>}/>
          </Tab.Navigator>
        :
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
          </Stack.Navigator>
    }  
    </>
  );
};

export default Routes;

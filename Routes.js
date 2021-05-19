import React from 'react';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {SignUp, SignIn, HomeScreen, Feed} from './Screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

const Routes = () => {
  const {currentUser} = useSelector((state) => state.user);
  console.log(currentUser);
  return (
    <>
      {currentUser ? (
        // <Drawer.Navigator>
          <Tab.Navigator tabBarOptions={{activeBackgroundColor: 'purple'}}>
            <Tab.Screen name="Classes" component={HomeScreen} />
            <Tab.Screen name="Create a Class" component={Feed} />
          </Tab.Navigator>
        {/* </Drawer.Navigator> */}
      ) : (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      )}
    </>
  );
};

export default Routes;

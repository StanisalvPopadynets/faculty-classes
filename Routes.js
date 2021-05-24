import React from 'react';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {SignUp, SignIn, HomeScreen, Details, CreateClass} from './Screens';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text, TouchableOpacity} from 'react-native';
import {logout} from './Redux/actions/user';
import colors from './Styles/Colors';

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  const dispatch = useDispatch();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        options={{
          title: 'Your classes',
          headerRight: () => (
            <TouchableOpacity
              onPress={async () => {
                await auth().signOut();
                dispatch(logout());
              }}>
              <Text
                style={{marginRight: 20, color: 'black', fontWeight: 'bold'}}>
                Logout
              </Text>
            </TouchableOpacity>
          ),
        }}
        component={HomeScreen}
      />
      <HomeStack.Screen
        name="Details"
        options={({route}) => ({
          title: route.params?.subject?.title,
          headerRight: () => (
            <TouchableOpacity
              onPress={async () => {
                await auth().signOut();
                dispatch(logoutt());
              }}>
              <Text
                style={{marginRight: 20, color: 'black', fontWeight: 'bold'}}>
                Logout
              </Text>
            </TouchableOpacity>
          ),
        })}
        component={Details}
      />
    </HomeStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

const Routes = () => {
  const {currentUser} = useSelector((state) => state.user);
  console.log(currentUser);
  return (
    <>
      {currentUser ? (
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color, size}) => {
              let iconName;
              if (route.name == 'Classes') {
                iconName = 'class';
              } else if (route.name == 'Create a Class') {
                iconName = 'add-circle';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeBackgroundColor: '#E8EAF6',
            activeTintColor: colors.mainBlue,
          }}>
          <Tab.Screen name="Classes" component={HomeStackScreen} />
          {currentUser.isTeacher && (
            <Tab.Screen name="Create a Class" component={CreateClass} />
          )}
        </Tab.Navigator>
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

import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { View, Text, SafeAreaView } from "react-native";
import OpacityButton from "../Components/OpacityButton";
import { logout } from "../Redux/actions/user";
import common from "../Styles/common";

export const HomeScreen = (props) => {

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={common.androidSafeArea}>
      <View style={common.container}>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <OpacityButton
          title="Logout"
          onPress={() => dispatch(logout())}
          />
      </View>
    </SafeAreaView>
  );
};

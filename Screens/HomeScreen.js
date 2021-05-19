import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, SafeAreaView} from 'react-native';
import OpacityButton from '../Components/OpacityButton';
import {logout} from '../Redux/actions/user';
import common from '../Styles/common';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const HomeScreen = (props) => {
  const dispatch = useDispatch();
  const {
    currentUser: {email, isTeacher},
  } = useSelector((state) => state.user);

  const onLogout = async () => {
    await auth().signOut();
    dispatch(logout());
  };

  useEffect(() => {
    const fetchClasses = async () => {
      const classes = await firestore()
        .collection('classes')
        .where('teacherId', '==', auth().currentUser.uid)
        .get()
        .then((snapshot) => {
          snapshot.forEach((queryDocumentSnapshot) => {
            console.log('Class', queryDocumentSnapshot.data());
          });
        });
    };
    fetchClasses();
  }, []);
  return (
    <SafeAreaView style={common.androidSafeArea}>
      <View style={common.container}>
        <OpacityButton title="Logout" onPress={onLogout} />
      </View>
    </SafeAreaView>
  );
};

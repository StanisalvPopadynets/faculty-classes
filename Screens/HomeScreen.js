import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/native';
import {Card} from '../Components';
import {logout} from '../Redux/actions/user';
import common from '../Styles/common';

export const HomeScreen = (props) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const {
    currentUser: {email, isTeacher, group},
  } = useSelector((state) => state.user);

  const [classes, setClasses] = useState([]);

  const onLogout = async () => {
    await auth().signOut();
    dispatch(logout());
  };

  const onPress = (subject) => {
    props.navigation.navigate('Details', {subject});
  };

  useEffect(() => {
    if (isFocused) {
      const fetchClasses = async () => {
        const fetchedClasses = [];
        if (isTeacher) {
          await firestore()
            .collection('classes')
            .where('teacherId', '==', auth().currentUser.uid)
            .get()
            .then((snapshot) => {
              snapshot.forEach((queryDocumentSnapshot) => {
                fetchedClasses.push(queryDocumentSnapshot.data());
              });
              setClasses(fetchedClasses);
            });
        } else {
          await firestore()
            .collection('classes')
            .where('group', '==', group)
            .get()
            .then((snapshot) => {
              snapshot.forEach((queryDocumentSnapshot) =>
                fetchedClasses.push(queryDocumentSnapshot.data()),
              );
              setClasses(fetchedClasses);
            });
        }
      };

      fetchClasses();
    }
  }, [isFocused]);

  return (
    <ScrollView>
      <SafeAreaView style={styles.safeAreaView}>
        {classes.map((el) => {
          return (
            <Card title={el.title} key={el.title} onPress={() => onPress(el)} />
          );
        })}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    padding: 20,
    paddingBottom: 0,
  },
});

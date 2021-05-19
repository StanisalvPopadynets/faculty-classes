import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {useDispatch} from 'react-redux';
import {Input} from '../Components';
import OpacityButton from '../Components/OpacityButton';
import common from '../Styles/common';
import signUpStyles from '../Styles/SignUpStyles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {setCurrentUser} from '../Redux/actions/user';
import {areCredentialsInvalid} from '../utils';
import colors from '../Styles/Colors';

export const SignUp = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isTeacher, setIsTeacher] = useState(false);

  const onChangeEmail = (text) => {
    setEmail(text);
  };
  const onChangePassword = (text) => {
    setPassword(text);
  };
  const onChangeRepeatPassword = (text) => {
    setRepeatPassword(text);
  };

  const toggleIsTeacher = () => {
    setIsTeacher(!isTeacher);
  };

  const onSubmit = async () => {
    const validationErrors = areCredentialsInvalid(email, password);

    if (validationErrors) {
      setErrorMessage(validationErrors);
      return;
    }

    if (repeatPassword !== password) {
      setErrorMessage('Passwords do not match');
      return;
    }
    try {
      const data = await auth().createUserWithEmailAndPassword(email, password);
      await firestore()
        .collection('users')
        .doc(data.user.uid)
        .set({email, isTeacher});
      dispatch(setCurrentUser({email, password, isTeacher}));
    } catch (error) {
      setErrorMessage(error);
      console.log(error);
    }
  };

  return (
    <View style={{...common.container, ...signUpStyles.container}}>
      <Text style={signUpStyles.logo}>Sign UP</Text>
      {errorMessage ? (
        <View style={styles.errorBox}>
          <Text style={styles.errorText}>{errorMessage || ''}</Text>
        </View>
      ) : null}
      <View>
        <Input onChangeText={onChangeEmail} value={email} placeholder="Email" />
        <Input
          onChangeText={onChangePassword}
          value={password}
          placeholder="Passowrd"
          secureTextEntry
        />
        <Input
          onChangeText={onChangeRepeatPassword}
          value={repeatPassword}
          placeholder="Repeat password"
          secureTextEntry
        />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>Sign up as a teacher</Text>
          <Switch
            trackColor={{false: '#767577', true: '#bc93fa'}}
            thumbColor={isTeacher ? colors.mainPurple : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleIsTeacher}
            value={isTeacher}
          />
        </View>
      </View>
      <View>
        <OpacityButton onPress={onSubmit} title="Sign Up" />
        <OpacityButton
          onPress={() => props.navigation.navigate('SignIn')}
          title="Sign In"
          isNotFilled={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  errorBox: {
    paddingHorizontal: 4,
    paddingVertical: 8,
    backgroundColor: '#f8d7da',
    borderColor: '#721c24',
    borderWidth: 1,
    borderRadius: 4,
  },
  errorText: {
    color: '#721c24',
  },
});

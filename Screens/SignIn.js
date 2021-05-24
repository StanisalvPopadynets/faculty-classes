import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {Input} from '../Components';
import {setCurrentUser, setLoginError} from '../Redux/actions/user';
import OpacityButton from '../Components/OpacityButton';
import common from '../Styles/common';
import signUpStyles from '../Styles/SignUpStyles';
import {areCredentialsInvalid} from '../utils';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  const onChangeEmail = (text) => {
    setEmail(text);
  };
  const onChangePassword = (text) => {
    setPassword(text);
  };

  const onSignIn = async () => {
    const validationErrors = areCredentialsInvalid(email, password);

    if (validationErrors) {
      setErrorMessage(validationErrors);
      return;
    }

    try {
      const signinRes = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      const verifyRes = await firestore()
        .collection('users')
        .doc(signinRes.user._user.uid)
        .get();
      dispatch(setCurrentUser(verifyRes.data()));
    } catch (error) {
      console.log(error.message);
      const possibleErr =
        'There is no user record corresponding to this identifier. The user may have been deleted.';
      if (error.message.includes(possibleErr)) {
        setErrorMessage(possibleErr);
      }
    }
  };

  // console.log(currentUser);

  return (
    <View style={{...common.container, ...signUpStyles.container}}>
      <Text style={signUpStyles.logo}>Sign In</Text>
      {errorMessage !== '' && (
        <View style={styles.errorBox}>
          <Text style={styles.errorMsg}>{errorMessage}</Text>
        </View>
      )}
      <View>
        <Input onChangeText={onChangeEmail} value={email} placeholder="Email" />
        <Input
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <View>
        <OpacityButton onPress={onSignIn} title="Sign In" />
        <OpacityButton
          onPress={() => props.navigation.navigate('SignUp')}
          title="Sign Up"
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

import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Input } from '../Components';
import OpacityButton from '../Components/OpacityButton';
import common from '../Styles/common';
import signUpStyles from '../Styles/SignUpStyles';

export const SignUp = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const onChangeEmail = text => {
    setEmail(text);
  };
  const onChangePassword = text => {
    setPassword(text);
  };
  const onChangeRepeatPassword = text => {
    setRepeatPassword(text);
  };

  return (
    <View style={{...common.container, ...signUpStyles.container}}>
      <Text style={signUpStyles.logo}>Sign UP</Text>
      <View>
          <Input
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email"
          />
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
      </View>
      <View>
        <OpacityButton
          onPress={() => console.log('SIGN U P')}
          title="Sign Up"
        />
        <OpacityButton
          onPress={() => props.navigation.navigate('SignIn')}
          title="Sign In"
          isNotFilled={true}  
        />
      </View>
    </View>
  );
};


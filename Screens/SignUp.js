import React, { useState } from 'react'
import { View, Text } from 'react-native';
import { Input } from '../Components';
import OpacityButton from '../Components/OpacityButton';
import common from '../Styles/common';
import signUpStyles from '../Styles/SignUpStyles';

export const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = text => {
    setEmail(text)
  }
  const onChangePassword = text => {
    setPassword(text)
  }

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
      </View>
      <OpacityButton
        onPress={() => console.log('SIGN UP')}
        title="Sign Up"
      />
    </View>
  )
}

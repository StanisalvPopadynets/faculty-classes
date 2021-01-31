import React, { useState } from 'react'
import { View, Text } from 'react-native';
import { Input } from '../Components';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../Redux/actions/user';
import OpacityButton from '../Components/OpacityButton';
import common from '../Styles/common';
import signUpStyles from '../Styles/SignUpStyles';

export const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  console.log(user);

  const onChangeEmail = text => {
    setEmail(text)
  }
  const onChangePassword = text => {
    setPassword(text)
  }

  return (
    <View style={{...common.container, ...signUpStyles.container}}>
      <Text style={signUpStyles.logo}>Sign In</Text>
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
        onPress={() => dispatch(setCurrentUser({email, password}))}
        title="Sign In"
      />
    </View>
  )
}

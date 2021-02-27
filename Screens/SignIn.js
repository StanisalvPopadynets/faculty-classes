import React, { useState } from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { showMessage, hideMessage } from "react-native-flash-message";
import { Input } from "../Components";
import { setCurrentUser, setLoginError } from "../Redux/actions/user";
import OpacityButton from "../Components/OpacityButton";
import common from "../Styles/common";
import signUpStyles from "../Styles/SignUpStyles";
import { areCredentialsInvalid } from "../utils";

export const SignIn = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { currentUser, errorMessage } = useSelector(state => state.user);
  
  const onChangeEmail = text => {
    setEmail(text);
  };
  const onChangePassword = text => {
    setPassword(text);
  };

  const onSignIn = () => {

    const validationErrors = areCredentialsInvalid(email, password);

    if (validationErrors) {
      showMessage({
        message: "My message title",
        description: "My message description",
        type: "default",
        backgroundColor: "purple", // background color
        color: "#606060", // text color
      });
      dispatch(setLoginError(validationErrors));
      return;
    }

    
    dispatch(setCurrentUser({ email, password }));
  }

  console.log(currentUser);

  return (
    <View style={{ ...common.container, ...signUpStyles.container }}>
      <Text style={signUpStyles.logo}>Sign In</Text>
      <View>
        {errorMessage !== "" && <Text>{errorMessage}</Text>}
        <Input
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
        />
        <Input
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <View>
        <OpacityButton
          onPress={onSignIn}
          title="Sign In"
        />
        <OpacityButton
          onPress={() => props.navigation.navigate('SignUp')}
          title="Sign Up"
          isNotFilled={true}  
        />
      </View>
    </View>
  );
};

import React from 'react';
import { TextInput } from 'react-native';
import inputStyles from '../Styles/InputStyles';

export const Input = (props) => {
  return (
    <TextInput
      style={inputStyles.input}
      // onChangeText={text => onChangeText(text)}
      // value={value}
      // placeholder={placeholder}
      {...props}
    />        
  );
};

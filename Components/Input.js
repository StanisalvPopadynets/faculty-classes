import React from 'react';
import { TextInput } from 'react-native';
import inputStyles from '../Styles/InputStyles';

export const Input = (props) => {
  return (
    <TextInput
      style={inputStyles.input}
      {...props}
    />        
  );
};

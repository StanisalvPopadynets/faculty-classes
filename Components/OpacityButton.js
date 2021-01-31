import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import buttonStyles from '../Styles/ButtonStyles';

const OpacityButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={.5} style={buttonStyles.button}  onPress={props.onPress}>
      <Text style={buttonStyles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default OpacityButton;

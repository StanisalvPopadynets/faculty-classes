import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import buttonStyles from '../Styles/ButtonStyles';

const OpacityButton = (props) => {

  const styles = StyleSheet.compose(buttonStyles.button, props.isNotFilled && buttonStyles.buttonNotFilled);
  const titleStyles = StyleSheet.compose(buttonStyles.title, props.isNotFilled && buttonStyles.titleNotFilled);

  return (
    <TouchableOpacity
      activeOpacity={.5}
      style={styles}
      onPress={props.onPress}
    >
      <Text style={titleStyles}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default OpacityButton;

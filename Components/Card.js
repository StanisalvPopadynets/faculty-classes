import React from 'react';
import {Text, View} from 'react-native';
import cardStyles from '../Styles/CardStyles';

export const Card = (props) => {
  return (
    <View style={cardStyles.card} {...props}>
      <Text>Card</Text>
    </View>
  );
};

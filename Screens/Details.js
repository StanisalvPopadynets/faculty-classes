import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import comminStyles from '../Styles/common';

export const Details = ({route}) => {
  return (
    <View style={comminStyles.container}>
      <Text style={styles.description}>{route.params.subject.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
  },
});

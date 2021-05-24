import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import cardStyles from '../Styles/CardStyles';

export const Card = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={cardStyles.card}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});

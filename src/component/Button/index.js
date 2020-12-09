import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../../utils';

const Button = ({ title, onPress}) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.button.primary.background,
    paddingVertical: 13,
    borderRadius: 5
  },
  disableBg: {
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.button.disable.background
  },
  text: {
    fontSize: 18,
    fontWeight : "600",
    textAlign: 'center',
    color: colors.button.primary.text
  },
  disableText: {
    fontSize: 18,
    fontWeight : "600",
    textAlign: 'center',
    color: colors.button.disable.text
  }
});
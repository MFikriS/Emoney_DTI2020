import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { colors } from '../../utils';

const Input = ({value, onChangeText, secureTextEntry, disable, placeholder}) => {
  const [border, setBorder] = useState(colors.border);
  const onFocusForm = () => {
    setBorder(colors.tertiary);
  };
  const onBlurForm = () => {
    setBorder(colors.border);
  };
  return (
    <View>
      <TextInput 
        onFocus={onFocusForm} 
        onBlur={onBlurForm} 
        style={styles.input(border)}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
      />
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
  input: (border) => ({
    borderWidth: 2,
    borderColor: border,
    borderRadius: 5,
    padding: 12
  }),
});
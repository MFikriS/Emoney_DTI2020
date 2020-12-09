import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
        navigation.replace('Login');
    }, 3000);
  }, []);

  return (
    <View style={styles.page}>
      <Text style={styles.title}>
        e-money
      </Text>
    </View>
  )
}

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: colors.white
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    color: "#4982C1",
    textAlign: "center"
  }
});
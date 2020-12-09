import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity  } from 'react-native';
import { Button, Input, Gap } from "../../component";

function SignIn({navigation}) {
  
  const [width, setWidth] = useState(Dimensions.get('window').height * 0.35);

  return (
    <>
      <View style={styles.page}>
        <View style={styles.body(width)}>
          <Text style={styles.title}>e-money</Text>
          <Gap height={19}/>
          <Input placeholder="Email"/>
          <Gap height={25}/>
          <Input placeholder="Password" secureTextEntry/>
          <Gap height={20}/>
          <Button title="LOGIN" onPress={() => navigation.replace('MainPage')}/>
          <Gap height={20}/>
          <TouchableOpacity onPress={() => navigation.navigate('Registrasi')}>
            <Text style={styles.regist}>Registrasi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: "white"
  },
  body:(width)=> ({
    paddingTop: width
  }),
  title: {
    fontSize: 29,
    fontWeight: "600",
    color: "#4982C1",
    textAlign: "center"
  },
  regist: {
    fontSize: 15,
    fontWeight: "600",
    color: "black",
    textAlign: "center"
  },
});
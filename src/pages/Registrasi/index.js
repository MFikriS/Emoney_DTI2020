import React, { useEffect, useState } from 'react';
import { AsyncStorage, View, Text, StyleSheet, ToastAndroid, Dimensions, TouchableOpacity  } from 'react-native';
import { Button, Input, Gap, Header } from "../../component";
import axios from 'axios';

function Registrasi({navigation}) {
  
  const [width, setWidth] = useState(Dimensions.get('window').height * 0.10);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [nama, setNama] = React.useState("");
  const [nomor_handphone, setNomor_handphone] = React.useState("");

  const submitRegistrasi = async () => {
    console.log(email);
    console.log(password);
    console.log(nama);
    console.log(nomor_handphone);
    axios.post('https://emoneydti.basicteknologi.co.id/index.php/api/users/registrasi', {
      email: email,
      password: password,
      nama: nama,
      nomor_handphone: nomor_handphone
    })
    .then(function (response) {
      if(response.navigate.data.status == "true"){
        navigate.navigate('Login');
      }
      else {
        ToastAndroid.show(response.data.msg, ToastAndroid.SHORT);
      }
      console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  return (
    <>
      <Header goBack title="Registrasi Akun"/>
      <View style={styles.page}>
        <View style={styles.body(width)}>
          <Input placeholder="Email"
            onChangeText={value => setEmail(value)}
          />
          <Gap height={31}/>
          <Input placeholder="Password" 
            onChangeText={value => setPassword(value)}
            secureTextEntry
          />
          <Gap height={31}/>
          <Input placeholder="Nama"
            onChangeText={value => setNama(value)}
          />
          <Gap height={31}/>
          <Input placeholder="No. Handphone"
            onChangeText={value => setNomor_handphone(value)}
          />
          <Gap height={31}/>
          <Button title="SUBMIT" onPress={submitRegistrasi} />
        </View>
      </View>
    </>
  );
}

export default Registrasi;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: "white"
  },
  body:(width)=> ({
    paddingTop: width
  }),
  regist: {
    fontSize: 15,
    fontWeight: "600",
    color: "black",
    textAlign: "center"
  },
});
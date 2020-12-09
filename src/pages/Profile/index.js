import * as React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Button, Gap } from '../../component';
import { colors } from "../../utils";

function ProfileScreen({navigation}) {

  const user = {
    id: "17231998",
    profilePic: "https://i.pinimg.com/originals/f5/05/24/f50524ee5f161f437400aaf215c9e12f.jpg",
    fullname: "Muhammad Fikri Septiawan",
    rekening : '081234567890'
  };

  return (
    <>
      <View style={styles.userContainer}>
        <Gap height={29}/>
        <Image source={{uri : user.profilePic}} style={styles.profPic}/>
        <Gap height={23}/>
        <Text style={styles.text}>{user.fullname}</Text>
        <Gap height={9}/>
        <Text style={styles.text}>{user.rekening}</Text>
        <Gap height={21}/>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="UBAH PROFIL"/>
        <Gap height={26}/>
        <Button title="GANTI PASSWORD"/>
        <Gap height={26}/>
        <Button title="LOGOUT" onPress={() => navigation.replace("Login")}/>
      </View>
    </>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  //USER CONTAINER
  userContainer: {
    backgroundColor: colors.button.primary.background,
    alignItems: 'center'
  },
  profPic: {
    height: 100,
    width: 100,
    borderRadius: 150
  },
  text: {
    fontSize: 20,
    color: colors.white
  },
  rekening: {},
  //BUTTON CONTAINER
  buttonContainer: {
    marginTop: 35,
    marginHorizontal: 39
  },
});
import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Button, Gap, Header, Input } from '../../component'
import { TransferVector } from "../../assets";

const Transfer = ({navigation}) => {
  const [receiver, setReceiver] = useState(false)

  const TransferCheck = () => {}
  return (
    <>
      <Header goBack title="Transfer"/>

      <View style={styles.container}>
        <Gap height={80}/>
        <View style={styles.imageContainer}>
          <Image source={TransferVector} style={styles.vector}/>
        </View>
        <Gap height={28}/>
        <Input placeholder="Nominal Transfer"/>
        <Gap height={18}/>
        <Input placeholder="Nomor Handphone Penerima"/>
        <Gap height={20}/>

        {
          receiver &&
          <View styles={styles.receiverContainer}>
            <Text style={styles.receiverTitle}>Penerima :</Text>
            <Gap height={21}/>
            <Text style={styles.receiverName}>Sandra Vieri si Bocah dari Comberan</Text>
            <Gap height={21}/>
          </View>
        }

        {!receiver && <Button title="PERIKSA NOMOR" onPress={() => setReceiver(!receiver)}/>}
        {receiver &&  <Button title="SUBMIT" onPress={() => navigation.replace("TransferSuccess")}/>}
      </View>
    </>
  )
}

export default Transfer

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    backgroundColor: "white",
    flex: 1
  },
  imageContainer: {
    alignItems: "center"
  },
  vector: {
    height: 172,
    width: 240,
  },
  receiverContainer: {},
  receiverTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400"
  },
  receiverName: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "300"
  }
});
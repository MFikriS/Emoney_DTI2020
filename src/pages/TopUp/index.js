import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Button, Gap, Header, Input } from '../../component'
import { TopUpVector } from "../../assets";

const TopUp = ({navigation}) => {
  return (
    <>
      <Header goBack title="Top Up"/>

      <View style={styles.container}>
        <Gap height={80}/>
        <View style={styles.imageContainer}>
          <Image source={TopUpVector} style={styles.vector}/>
        </View>
        <Gap height={28}/>
        <Input placeholder="Nominal Top Up"/>
        <Gap height={20}/>
        <Button title="SUBMIT" onPress={() => navigation.replace("TopUpSuccess")}/>
      </View>
    </>
  )
}

export default TopUp

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
  },
  imageContainer: {
    alignItems: "center"
  },
  vector: {
    height: 156,
    width: 156,
  }
});
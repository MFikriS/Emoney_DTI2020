import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { Header } from "../../component";
import { GreyRectangle, IconOpenQRPay } from "../../assets";

const QRPay = ({navigation}) => {
  return (
    <>
      <Header goBack title="QR Payment"/>

      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("QRPayConfirm")}>
          <ImageBackground source={GreyRectangle} style={styles.greyVector}>
            <Image source={IconOpenQRPay} style={styles.iconCamera}/>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default QRPay

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  greyVector: {
    height: 319,
    width: 319,
    alignItems: "center",
    justifyContent: "center"
  },
  iconCamera: {
    height: 30,
    width: 30
  }
});
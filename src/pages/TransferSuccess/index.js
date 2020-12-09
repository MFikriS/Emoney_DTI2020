import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Button, Gap, Header, Input } from '../../component'
import { TransferVector } from "../../assets";
import { colors } from '../../utils';

const TransferSuccess = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Gap height={77}/>

      {/* Transfer Vector */}
      <View style={styles.imageContainer}>
        <Image source={TransferVector} style={styles.vector}/>
      </View>
      
      <Gap height={44}/>

      {/* Success Transfer Message */}
      <Text style={styles.transferMessages}>Transfer Berhasil</Text>
      <Gap height={20}/>
      <Text style={styles.transferNominal}>Rp. 100.000</Text>

      <Gap height={23}/>

      {/* Date & Receiver */}
      <View style={styles.datereceiverContainer}>
        <Gap height={14}/>
        <Text style={styles.datereceiverText}>20 Agustus 2020</Text>
        <Gap height={17}/>
        <Text style={styles.datereceiverText}>Penerima: Muhammad Fikri Septiawan</Text>
        <Gap height={17}/>
        <Text style={styles.datereceiverText}>081234567xxx</Text>
        <Gap height={18}/>
      </View>

      <Gap height={27}/>

      <Button title="SELESAI" onPress={() => navigation.replace("MainPage")}/>
    </View>
  )
}

export default TransferSuccess

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    backgroundColor: "white",
    flex: 1
  },
  // Top Up Vector
  imageContainer: {
    alignItems: "center"
  },
  vector: {
    height: 172,
    width: 240,
  },
  // Transfer Messages
  transferMessages: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '400'
  },
  transferNominal: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '400'
  },
  // Date & Receiver
  datereceiverContainer: {
    backgroundColor: colors.tertiary
  },
  datereceiverText: {
    textAlign: "center",
    fontSize: 20,
    color: colors.white
  }
});
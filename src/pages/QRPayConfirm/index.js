import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Button, Gap, Header, Input } from '../../component'
import { PaymentVector } from "../../assets";
import { colors } from '../../utils';
import { color } from 'react-native-reanimated';

const QRPayConfirm = ({navigation}) => {
  return (
    <>
      <Header title="Konfirmasi Bayar" goBack/>
      <View style={styles.container}>
        <Gap height={40}/>

        {/* Payment Vector */}
        <View style={styles.imageContainer}>
          <Image source={PaymentVector} style={styles.vector}/>
        </View>

        <Gap height={11}/>

        {/* Payment Nominal */}
        <Text style={styles.paymentNominal}>Rp. 60.000</Text>
        <Gap height={6}/>
        <View style={styles.divider}/>

        <Gap height={21}/>

        {/* Receiver & Address */}
        <View style={styles.dateaddressContainer}>
          <Gap height={17}/>
          <Text style={styles.dateaddressText}>Pembayaran Kepada :</Text>
          <Gap height={13}/>
          <Text style={styles.dateaddressReceiver}>DTI Telkom University</Text>
          <Gap height={4}/>
          <Text style={styles.dateaddressAddress}>Jl. Telekomunikasi Kab. Bandung</Text>
          <Gap height={29}/>
        </View>

        <Gap height={32}/>

        <Button title="SUBMIT" onPress={() => navigation.replace("PaySuccess")}/>

      </View>
    </>
  )
}

export default QRPayConfirm

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    backgroundColor: "white",
    flex: 1
  },
  // Payment Vector
  imageContainer: {
    alignItems: "center"
  },
  vector: {
    height: 200,
    width: 200,
  },
  // Payment Nominal
  paymentNominal: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '400'
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
  },
  // Receiver & Address
  dateaddressContainer: {
    backgroundColor: colors.tertiary
  },
  dateaddressText: {
    textAlign: "center",
    fontSize: 20,
    color: colors.white,
    fontWeight: "300"
  },
  dateaddressReceiver: {
    textAlign: "center",
    fontSize: 26,
    color: colors.white,
    fontWeight: "400"
  },
  dateaddressAddress: {
    textAlign: "center",
    fontSize: 18,
    color: colors.white,
    fontWeight: "400"
  }
});

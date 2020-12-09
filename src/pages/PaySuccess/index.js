import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Button, Gap, Header, Input } from '../../component'
import { PaymentVector } from "../../assets";
import { colors } from '../../utils';
import { color } from 'react-native-reanimated';

const PaySuccess = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Gap height={40}/>

        {/* Payment Vector */}
        <View style={styles.imageContainer}>
          <Image source={PaymentVector} style={styles.vector}/>
        </View>

        <Gap height={44}/>

        {/* Payment Nominal */}
        <Text style={styles.paymentNominal}>Pembayaran Berhasil</Text>
        <Gap height={23}/>
        <Text style={styles.paymentNominal}>Rp. 60.000</Text>

        <Gap height={23}/>

        {/* Receiver & Address */}
        <View style={styles.dateaddressContainer}>
          <Gap height={14}/>
          <Text style={styles.dateaddressText}>20 Agustus 2020</Text>
          <Gap height={17}/>
          <Text style={styles.dateaddressText}>Penerima DTI Telkom University</Text>
          <Gap height={12}/>
          <Text style={styles.dateaddressText}>Jl. Telekomunikasi Kab. Bandung</Text>
          <Gap height={15}/>
        </View>

        <Gap height={29}/>

        <Button title="SELESAI" onPress={() => navigation.replace("MainPage")}/>

      </View>
    </>
  )
}

export default PaySuccess

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
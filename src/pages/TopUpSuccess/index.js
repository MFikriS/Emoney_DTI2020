import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Button, Gap, Header, Input } from '../../component'
import { TopUpVector } from "../../assets";
import { colors } from '../../utils';

const TopUpSuccess = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Gap height={77}/>

      {/* Top Up Vector */}
      <View style={styles.imageContainer}>
        <Image source={TopUpVector} style={styles.vector}/>
      </View>
      
      <Gap height={44}/>

      {/* Success Top Up Message */}
      <Text style={styles.topupMessages}>Top Up Berhasil</Text>
      <Gap height={20}/>
      <Text style={styles.topupNominal}>Rp. 60.000</Text>

      <Gap height={23}/>

      {/* Date & Bank */}
      <View style={styles.datebankContainer}>
        <Gap height={14}/>
        <Text style={styles.datebankText}>20 Agustus 2020</Text>
        <Gap height={17}/>
        <Text style={styles.datebankText}>VA Mandiri</Text>
        <Gap height={18}/>
      </View>

      <Gap height={27}/>

      <Button title="SELESAI" onPress={() => navigation.replace("MainPage")}/>
    </View>
  )
}

export default TopUpSuccess

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
    height: 156,
    width: 156,
  },
  // Top Up Messages
  topupMessages: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '400'
  },
  topupNominal: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '400'
  },
  // Date & Bank
  datebankContainer: {
    backgroundColor: colors.tertiary
  },
  datebankText: {
    textAlign: "center",
    fontSize: 20,
    color: colors.white
  }
});
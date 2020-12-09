import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { IconCompareArrow } from "../../assets";
import { Gap } from "../../component";

const index = ({onPress, nominal, rekening, date}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>

        <View style={styles.cardLeft}>
          <Image
            source={IconCompareArrow}
            style={styles.icon}
          />
          <View>
            <Text>{nominal}</Text>
            <Gap height={9}/>
            <Text>Transfer ke {rekening}</Text>
          </View>
        </View>

        <View style={styles.cardRight}>
          <Text>{date}</Text>
        </View>

      </View>
    </TouchableOpacity>
  )
}

export default index;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 18,
    paddingVertical: 16,
    paddingHorizontal: 11,
    elevation: 5,
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    height: 24,
    width: 24,
    marginRight: 11
  }
});
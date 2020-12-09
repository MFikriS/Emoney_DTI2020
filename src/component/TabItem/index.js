import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { HomeActive, HomeInactive, UpDownActive, UpDownInactive, UserActive, UserInactive } from '../../assets';

const TabItem = ({title, active, onPress, onLongPress}) => {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress} 
      onLongPress={onLongPress}
    >
      {title === "Home" && <Image
        style={styles.image}
        source={active ? HomeActive : HomeInactive}
      />}
      {title === "InOut" && <Image
        style={styles.image}
        source={active ? UpDownActive : UpDownInactive}
      />}
      {title === "Profile" && <Image
        style={styles.image}
        source={active ? UserActive : UserInactive}
      />}
    </TouchableOpacity>
  )
}

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  image: {
    height: 25,
    width: 25,
    marginVertical: 12
  }
});
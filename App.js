/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  Home, 
  Profile, 
  Transaction, 
  Login, 
  Registrasi, 
  Splash, 
  TopUp,
  QRPay,
  Transfer,
  TopUpSuccess,
  TransferSuccess,
  QRPayConfirm,
  PaySuccess
} from './src/pages'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from "./src/component";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomNavigator {...props}/>}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="InOut" component={Transaction} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Splash'
      >
        <Stack.Screen 
          name="Splash" 
          component={Splash}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Registrasi" 
          component={Registrasi}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="MainPage" 
          component={BottomTabNavigator}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="TopUp" 
          component={TopUp}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="QRPay" 
          component={QRPay}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Transfer" 
          component={Transfer}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="TopUpSuccess"
          component={TopUpSuccess}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="TransferSuccess"
          component={TransferSuccess}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="QRPayConfirm"
          component={QRPayConfirm}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="PaySuccess"
          component={PaySuccess}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator;

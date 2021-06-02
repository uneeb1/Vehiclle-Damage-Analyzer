// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { theme } from '../core/theme';
const SettingsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16,  backgroundColor: theme.colors.secondary,}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
              color: theme.colors.primary,
            }}>
          About Us
            {'\n'}
            •The user does not need to visit the mechanic for finding out the probability of damage parts and the price of the vehicle.
            {'\n'}
            •User can take images from his mobile of the damaged parts of the vehicle and upload it in the application.
            {'\n'}
            •The user will get a report that will show the probability of the damaged part and its price.
            {'\n'}
            •The user will also have a suggestion option for finding out new vehicles for buying and their price.
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
        
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
     
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
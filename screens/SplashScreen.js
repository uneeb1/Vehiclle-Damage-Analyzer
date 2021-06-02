// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  Text,
  Animated, Easing
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AsyncStorage } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { theme } from '../core/theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//import Login from './screens/login';import App from './screens/login';
//import App from './screens/login';
//import AsyncStorage from '@react-native-community/async-storage';
import * as Animatable from 'react-native-animatable';
const SplashScreen = ({ navigation }) => {

  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);
  const width = new Animated.Value(wp(150));
  const height = new Animated.Value(hp(300));

  // const uri = "https://raw.githubusercontent.com/AboutReact/sampleresource/master/site_banner_vertical.png"

  this.titleTranslateYValue = new Animated.Value(0);
  this.titleScaleValue = new Animated.Value(0);
  useEffect(() => {
    Animated.timing(
      width, // The animated value to drive
      {
        toValue: 200, // Animate to opacity: 1 (opaque)
        duration: 450, // Make it take a while
        useNativeDriver: false,
      },
    ).start(); // Starts the animation
    Animated.timing(
      height, // The animated value to drive
      {
        toValue: 350, // Animate to opacity: 1 (opaque)
        duration: 4000, // Make it take a while
        useNativeDriver: false,
      },
    ).start(); // Starts the animation
  });

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('user_id').then((value) =>
        navigation.replace(
          value === null ? 'Auth' : 'DrawerNavigationRoutes'
        ),
      );
    }, 5000);
  }, []);

  return (
   
     <View style={styles.container}> 
      <View>
        <Animatable.Text style={styles.link} animation="slideInDown" duration={4000} iterationCount={1} direction="normal">Vehicle Damage Analyzer</Animatable.Text>

      </View>
      <Animated.Image
        source={require('../assets/Analyze.png')}
        style={{
          width: width,
          height: height,
          position: 'absolute',
          resizeMode: 'contain',
          top: hp(20),
          left: wp(20)
        }}
      />


      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
 
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: theme.colors.secondary,
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  innerText: {
    backgroundColor: '#153e5c',
    fontWeight: 'bold',

    fontStyle: 'italic',
    marginBottom: 20
  },
  link: {
    fontSize: 20,
    position: 'absolute',
    top: heightPercentageToDP(30),
    left: widthPercentageToDP(-30),
    fontWeight: 'bold',
    color: theme.colors.primary,
  },

});
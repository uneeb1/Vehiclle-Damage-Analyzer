import React, { memo } from 'react';
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const Background = ({ children ,...props }) => (
  <ImageBackground
  // source={require('../assets/background_dot.png')}
    resizeMode="repeat"
    style={{...styles.background ,...props.style}}
  >{props.children}
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: wp('100%'),
  },
  container: {
    flex: 1,
    padding: 20,
    width:wp('100%'),
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(Background);

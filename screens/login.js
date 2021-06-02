import React, {useState, Component } from 'react';
import {
  StyleSheet, Text, View, TouchableWithoutFeedback, Image, Animated,
  Keyboard, TouchableOpacity, KeyboardAvoidingView, Alert
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
//import Button from '../component/Button';
import { TextInput } from 'react-native-paper';
import { theme } from '../core/theme';
import firebase from '../screens/user/firebase'
import { useNavigation } from '@react-navigation/native'
import Backfround from '../component/Background';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TypingAnimation } from 'react-native-typing-animation';
import { Button } from 'native-base';


export default class Login extends Component {

  constructor(props) {
    super(props);
   
    this.state = {
      email: '',
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userLogin = () => {
    if (this.state.email == '' || this.state.password == '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          console.log(res)
          console.log('User logged-in successfully!')
          this.setState({
            isLoading: false,
            email: '',
            password: ''
          })
          this.props.navigation.navigate('DrawerNavigationRoutes')
        })
        .catch(error => this.setState({ errorMessage: error.message }))
    }

    this.state = {
      hidePassword: true,
      typing_email: false,
      typing_password: false,
      animation_login: new Animated.Value(wp - 40),
      enable: true
    }
  }
  setPasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });

  }


  _foucus(value) {
    if (value == "email") {
      this.setState({
        typing_email: true,
        typing_password: false
      })
    }
    else {
      this.setState({
        typing_email: false,
        typing_password: true
      })
    }
  }

  _typing() {
    return (
      <TypingAnimation
        dotColor='#2b6684'
        style={{
          marginRight: 35,
          position: 'absolute',
          top: hp(5),
          right: wp(3)
        }}
      />
    )
  }

  _animation() {
    Animated.timing(
      this.state.animation_login,
      {
        toValue: 40,
        duration: 250
      }
    ).start();

    setTimeout(() => {
      this.setState({
        enable: false,
        typing_email: false,
        typing_password: false
      })
    }, 150);

  }

  render() {
 

    return (


      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <KeyboardAvoidingView
         behavior="padding"
         keyboardVerticalOffset={50}
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={{ flex: 1 }} enabled><ScrollView>

            <Backfround style={styles.container}>
             {/* <Loader loading={loading} /> */}
              <View style={styles.inputContainer}>
                <View>
                  <Image source={require('../assets/Analyze.png')} style={{
                    resizeMode: 'contain',
                    height: 150,
                    width: 150,
                    position: 'absolute',
                    left: wp(22),
                    bottom: hp(-3),
                    alignItems: 'center'
                  }}
                    fadeDuration={0}></Image>
                </View>




                <View style={styles.action}>

                  <TextInput
                    //   Icon={require('../assets/user.png')}
                    label="Email"
                    theme={{ colors: { text: 'black', defaultColor: "#307ecc'", primary: theme.colors.primary, } }}
                    placeholder="Email"
                    returnKeyType="next" autoCapitalize="none"
                    autoCompleteType="email"
                    required
                    email
                    textContentType="emailAddress"
                    mode="outlined"
                    errorText="Please enter a valid email address."
                    keyboardType="email-address" style={styles.input}
                    onFocus={() => this._foucus("email")}
                    value={this.state.email}
                    onChangeText={(val) => this.updateInputVal(val, 'email')} />
                  {this.state.typing_email ?
                    this._typing()
                    : null}


                </View>
                <View style={styles.action1}>

                  <TextInput placeholder="password" returnKeyType="done"
                    label="Password"
                    theme={{ colors: { text: 'black', primary: theme.colors.primary, } }}
                    mode="outlined"
                    secureTextEntry={this.state.hidePassword} style={styles.input}
                    required
                    minLength={5}
                    onFocus={() => this._foucus("password")}
                    placeholderTextColor="#8b9cb5"
                    onChangeText={(val) => this.updateInputVal(val, 'password')}
                    maxLength={15}
                  />

                </View>
                <TouchableOpacity activeOpacity={0.9} style={styles.touachableButton} onPress={this.setPasswordVisibility}>
                  <Image source={(this.state.hidePassword) ? require('../assets/show.png') : require('../assets/hide.png')} style={styles.buttonImage} />
                </TouchableOpacity>


                <View style={styles.forgotPassword}>
                  <TouchableOpacity
                  //onPress={() => navigation.navigate('ForgotPasswordScreen')}
                  >
                    <Text style={styles.label}>Forgot your password?</Text>
                  </TouchableOpacity>
                </View>

                <Button rounded mode="contained"
                  // onPress={_onLoginPressed}
                  style={styles.button}
                  onPress={() => this.userLogin()}

                >
                  <Text style={styles.buttonTxt} >       Login </Text>
                </Button >

                <View style={styles.row}>
                  <Text style={styles.label}>Don’t have an account?</Text>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text style={styles.link}>Sign up</Text>
                  </TouchableOpacity>
                </View>
               
              </View>
            </Backfround>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  };
};
const styles = StyleSheet.create({

  container: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: theme.colors.secondary,
    alignItems: 'center',

    width: wp('100%'),
    height: hp('100%'),

  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  action: {
    flexDirection: 'row',

    borderBottomWidth: 1,
    borderBottomColor: theme.colors.primary,
  },
  action1: {
    // flexDirection:'row',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.primary,
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginTop: hp(1),
    paddingRight: 20,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },

  inputContainer: {
    position: 'absolute',
    top: hp(20),


  },
  input: {

    // alignSelf: 'stretch',
    height: hp('7.5%'),
    width: wp('85%'),
    //  padding:'offset',
    //borderWidth: 1,
    borderRadius: 25,
    fontSize: 16,
    marginTop: 10,

    paddingBottom: 10,
    backgroundColor: 'white',
    borderColor: '#307ecc',
    margin: 6
  },
  label: {
    color: 'black',
  },
  button: {
    position: 'absolute',
    top: hp(31),
    left: wp(4),
    width: wp('80%'),
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    //marginBottom:hp(6),



  },
  buttonTxt: {

    width: wp('80%'),
    alignItems: 'center',
    color: theme.colors.secondary,
    paddingLeft: wp(28),



  },
  row: {
    position: 'absolute',
    top: hp(39),
    left: wp(5),
    flexDirection: 'row',
    // marginTop: 4,
    paddingLeft: wp(13)
  },

  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,

    paddingHorizontal: 25,



  },


  loginInput: {
    flexDirection: 'column',
    position: 'absolute',
    top: hp(3),
    left: wp(1),
  },
  touachableButton: {
    position: 'absolute',
    top: hp(16),
    right: wp(3),
    height: 35,
    width: 35,
    padding: 4,
    opacity: 0.8,
    color: '#6d838a'
  },
  buttonImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  }
}
);


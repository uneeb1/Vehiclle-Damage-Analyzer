import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TouchableWithoutFeedback, Image, Alert, Animated, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView, Dimensions
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../core/theme';
//import Button from '../component/Button';
import { TextInput } from 'react-native-paper';
import { TypingAnimation } from 'react-native-typing-animation';
import { Button } from 'native-base';
import Backfround from '../component/Background';
import Cards from '../component/Cards';
import firebase from '../screens/user/firebase'
export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      displayName: '',
      lastname:'',
      email: '', 
      contact:'',
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName,
          lastname:this.state.lastname,
        
          contact:this.state.contact,
        })
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
      lastname:'',
      email: '', 
      contact:'',
          password: ''
        })
        this.props.navigation.navigate('Login')
      })
      .catch(error => this.setState({ errorMessage: error.message }))      
    }
  
    this.state = {
      hidePassword: true,
      typing_email: false,
      typing_name: false,
      typing_contact: false,
      typing_Lastnam: false,

      animation_login: new Animated.Value(wp - 40),
      enable: true
    }
  }
  setPasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });

  }


  _foucus(value) {
    if (value == "first") {
      this.setState({
        typing_email: false,
        typing_name: true,
        typing_contact: false,
        typing_Lastnam: false,

        typing_email: false
      })
    }
    else if (value == "email") {
      this.setState({
        typing_name: false,
        typing_contact: false,
        typing_Lastnam: false,
        typing_email: true,
      })

    }
    else if (value == "Last") {
      this.setState({
        typing_email: false,
        typing_contact: false,
        typing_Lastnam: true,
        typing_name: false
      })

    }
    else {
      this.setState({
        typing_email: false,
        typing_contact: true,
        typing_Lastnam: false,
        typing_name: false

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
          top: hp(4.5),
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
    const { width: WIDTH } = Dimensions.get('window')
    return (


      <ScrollView>



        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={{ flex: 1 }}
          >


            <Backfround style={styles.container}>
              <View style={styles.inputContainer}>

                <View>
                  <Image source={require('../assets/Analyze.png')} style={{
                    resizeMode: 'contain',
                    height: 150,
                    width: 150,
                    position: 'absolute',
                    left: wp(22),
                    bottom: hp(0),
                    alignItems: 'center'
                  }}
                    fadeDuration={0} ></Image>
                </View>
                <View >
                  <Text style={styles.textStyle}>Sign Up Form</Text>
                </View>


                <View style={styles.action} >
                  <TextInput
                    //   Icon={require('../assets/user.png')}
                    label="First Name"
                    theme={{ colors: { text: 'black', backgroundColor: "transparent",  primary:  theme.colors.primary, } }}
                    placeholder="Name"
                    returnKeyType="next" autoCapitalize="none"
                    //  autoCompleteType="email"
                    //  textContentType="emailAddress"
                    mode="outlined"
                    keyboardType="email-address" style={styles.input}
                    onFocus={() => this._foucus("first")}
                    value={this.state.displayName}
                    onChangeText={(val) => this.updateInputVal(val, 'displayName')}
                  //placeholderTextColor="#8b9cb5" 
                  />
                  {this.state.typing_name ?
                    this._typing()
                    : null}
                </View>
                {/* <View style={styles.loginInput}>
                                    <Image
                                        source={require('../assets/user.png')}
                                        fadeDuration={0}
                                        style={styles.icon}
                                    /></View> */}


                <View style={styles.action1} >
                  <TextInput label="Last Name"
                    theme={{ colors: { text: 'black', backgroundColor: "transparent", primary:  theme.colors.primary,} }}
                    placeholder="Last Name" mode="outlined"
                    keyboardType="email-address" style={styles.input}
                    onFocus={() => this._foucus("Last")}
                    value={this.state.lastname}
                    onChangeText={(val) => this.updateInputVal(val, 'lastname')}
                  />
                  {this.state.typing_Lastnam ?
                    this._typing()
                    : null}
                </View>

                <View style={styles.action1} >
                  <TextInput label="Email"
                    theme={{ colors: { text: 'black', backgroundColor: "transparent", primary:  theme.colors.primary, } }}
                    placeholder="Email" mode="outlined"
                    keyboardType="email-address" style={styles.input}
                    onFocus={() => this._foucus("email")}
                    value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
                  />
                  {this.state.typing_email ?
                    this._typing()
                    : null}
                </View>

                <View style={styles.action1} >
                  <TextInput label="Contact"
                    theme={{ colors: { text: 'black', backgroundColor: "transparent",  primary:  theme.colors.primary, } }}
                    placeholder="Contact" mode="outlined"
                    keyboardType="email-address" style={styles.input}
                    onFocus={() => this._foucus("contact")}
                  />
                  {this.state.typing_contact ?
                    this._typing()
                    : null}
                </View>


                <View style={styles.action1} >
                  <TextInput label="Password"
                    theme={{ colors: { text: 'black', backgroundColor: "transparent", primary:  theme.colors.primary, } }}
                    placeholder="Password" mode="outlined" style={styles.input}
                    onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
                  />
                </View>
                <TouchableOpacity activeOpacity={0.9} style={styles.touachableButton} onPress={this.setPasswordVisibility}>
                  <Image source={(this.state.hidePassword) ? require('../assets/show.png') : require('../assets/hide.png')} style={styles.buttonImage} />
                </TouchableOpacity>


                <Button rounded mode="contained"
                  onPress={() => this.registerUser()}
                  style={styles.button}>
                <Text  style={styles.buttonTxt}>  Sign Up </Text>
      </Button>

                <View style={styles.row}>
                  <Text style={styles.label}>Already have an account? </Text>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.link}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>

            </Backfround>


          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  };
};
const styles = StyleSheet.create({

  container: {

    flex: 1,
    // backgroundColor: 'rgb(243, 240, 247)',
    flexDirection: 'column',

    alignItems: 'center',
   backgroundColor: theme.colors.secondary,
    width: wp('100%'),
    height: hp('95%'),
  }
  ,
  inputContainer: {
    position: 'absolute',
    top: hp(20),


  },
  label: {
    color: 'black'
  },

  row: {
    flexDirection: 'row',
    marginTop: 4,
    paddingLeft: wp(20)
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },

  input: {
    flex: 1,
    // alignSelf: 'stretch',
    height: hp('6.5%'),
    width: wp('85%'),
    //  padding:'offset',
    //borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
    //  marginTop: 10,
    // marginBottom: 10,
    //  paddingBottom: 10,
    //color: 'white',
    borderColor: '#dadae8',
    margin: 6
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,

    paddingHorizontal: 10,

  },
  textStyle: {
    alignItems: 'center',
    color: theme.colors.primary,
    fontSize: 20,
    paddingLeft: 20,
    fontWeight: 'bold',

  },
  icon: {
    width: 25, height: 25, opacity: 0.7

  },
  button: {
   marginTop:hp(1),
    left: wp(4),
    width: wp('80%'),
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    //marginBottom:hp(6),



  },
  buttonTxt: {

    width: wp('80%'),
    alignItems: 'center',
color:theme.colors.secondary,
paddingLeft: wp(28),


  },
  loginInput: {
    position: 'absolute',
    top: hp(7),
    right: wp(5),
  },
  loginInput2: {
    position: 'absolute',
    top: hp(16),
    right: wp(5),
  },
  loginInput3: {
    position: 'absolute',
    top: hp(25),
    right: wp(5),
  },
  loginInput4: {
    position: 'absolute',
    top: hp(6),
    right: wp(5),
  },
  loginInput1: {
    position: 'absolute',
    top: hp(34.4),
    right: wp(5),
  },

  touachableButton: {
    position: 'absolute',
    right: wp(5),
    top: hp(45),
    height: 40,
    width: 35,
    padding: 4,
    opacity: 0.8
  },
  buttonImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  }




}
);
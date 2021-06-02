// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Cards from '../component/Cards';
import { theme } from '../core/theme';
import { CommonActions, useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import page1 from './page1';
export default class Sugesstion extends Component {
 
  constructor(props) {
    super(props);
  }

  
  _animation() {
    const navigation = useNavigation()
  }
  
  render() {


    return (
      <ScrollView>

        <Cards style={styles.Container}>


          <Cards style={styles.Container1}>

            <TouchableOpacity
              onPress={
                () => this.props.navigation.navigate('Page1')
              }
            >
              <Text style={styles.innerText}> Corrola </Text>
              <Image source={require('../assets/Car.png')} style={{
                resizeMode: 'contain',
                height: 100,
                width: 100,
                alignItems: 'center'
              }}
              />
            </TouchableOpacity>
          </Cards>

          <Cards style={styles.Container2}>

            <TouchableOpacity activeOpacity={1}
              onPress={
                () => this.props.navigation.navigate('Page2')
              }
            >
              <Text style={styles.innerText}> Swift </Text>
              <Image source={require('../assets/Swift.png')} style={{
                resizeMode: 'contain',
                height: 100,
                width: 100,

              }}
              />
            </TouchableOpacity>
          </Cards>




          <Cards style={styles.Container3}>

            <TouchableOpacity activeOpacity={0.9}
              onPress={() => this.props.navigation.navigate('Page3')}
            >
              <Text style={styles.innerText}> Cultus </Text>
              <Image source={require('../assets/Cultus.png')} style={{
                resizeMode: 'contain',
                height: 100,
                width: 100,

                alignItems: 'center'
              }}

              />
            </TouchableOpacity>

          </Cards>

          <Cards style={styles.Container4}>

            <TouchableOpacity activeOpacity={1}
              onPress={() => this.props.navigation.navigate('Page4')}
            >
              <Text style={styles.innerText}> Vitz </Text>
              <Image source={require('../assets/Vitz.png')} style={{
                resizeMode: 'contain',
                height: 120,
                width: 120,

                alignItems: 'center'
              }}
              />
            </TouchableOpacity>
          </Cards>



          <Cards style={styles.Container5}>

            <TouchableOpacity activeOpacity={0.9}
              onPress={() => this.props.navigation.navigate('Page5')}
            >
              <Text style={styles.innerText}> Alto
                  Model : 2020 </Text>
              <Image source={require('../assets/Alto.png')} style={{
                resizeMode: 'contain',
                height: 100,
                width: 100,
                paddingTop: 0

              }}

              />

              <Text style={styles.innerText1}>  </Text>
            </TouchableOpacity>
          </Cards>


          <Cards style={styles.Container6}>

            <TouchableOpacity activeOpacity={1}
              onPress={() => this.props.navigation.navigate('Page6')}
            >
              <Text style={styles.innerText}> Wagnor  </Text>
              <Image source={require('../assets/Wagnor.png')} style={{
                resizeMode: 'contain',
                height: 100,
                width: 100,

              }}

              />
            </TouchableOpacity>
          </Cards>
        </Cards>
      </ScrollView>

    );
  }
};
const styles = StyleSheet.create({

  Container1: {

    position: 'absolute',
    //left:wp(5),
    top: hp(5),
    borderColor: theme.colors.primary,
    flexDirection: 'column',
    borderRadius: 0,
    borderBottomWidth: 1,
    //  alignItems: 'center',
    //  flexDirection:'row',
    width: wp('100%'),
    height: hp('20%'),

  },
  Container: {


    width: wp('100%'),
    height: hp('200%'),

    borderRadius: 0,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  Container2: {

    position: 'absolute',
    left: wp(0),
    top: hp(25),

    width: wp('100%'),
    height: hp('20%'),
    flexDirection: 'column',
    borderRadius: 0,
    borderColor: theme.colors.primary,
    borderBottomWidth: 1
  },
  Container3: {

    position: 'absolute',
    right: wp(0),
    top: hp(45),

    width: wp('100%'),
    height: hp('20%'),

    borderRadius: 0,
    borderColor: theme.colors.primary,
    borderLeftWidth: 1,
    borderBottomWidth: 1

  },
  Container4: {

    position: 'absolute',
    right: wp(0),
    top: hp(65),

    width: wp('100%'),
    height: hp('20%'),

    borderRadius: 0,
    borderColor: theme.colors.primary,
    borderLeftWidth: 1,
    borderBottomWidth: 1

  },
  Container5: {

    position: 'absolute',
    //right:wp(0),
    top: hp(85),

    width: wp('100%'),
    height: hp('20%'),

    borderRadius: 0,
    borderColor: theme.colors.primary,
    borderLeftWidth: 1,
    borderBottomWidth: 1

  },
  Container6: {

    position: 'absolute',
    //right:wp(0),
    top: hp(105),

    width: wp('100%'),
    height: hp('20%'),

    borderRadius: 0,
    borderColor: theme.colors.primary,
    borderLeftWidth: 1,
    //borderBottomWidth:1


  },
  innerText: {
    color: '#307ecc',
    fontWeight: 'bold',
    position: 'absolute',
    left: wp(30),
    fontSize: 17,
    top: hp(-2),
    fontStyle: 'italic',
    marginTop: 0
  },
  innerText1: {
    color: '#307ecc',
    fontWeight: 'bold',
    position: 'absolute',
    // left:wp(10),
    alignItems: 'center',
    fontSize: 17,
    //  top:hp(-2),
    fontStyle: 'italic',
    marginTop: 4
  },
  Container7: {

    position: 'absolute',
    //right:wp(0),
    top: hp(125),

    width: wp('100%'),
    height: hp('30%'),

    borderRadius: 0,
    // borderColor: theme.colors.primary,
    borderLeftWidth: 1,
    //borderBottomWidth:1,
    // elevation:0


  },
  Container10: {

    position: 'absolute',
    //right:wp(0),
    top: hp('100'),

    width: wp('100%'),
    height: hp('30%'),

    borderRadius: 0,
    // borderColor: theme.colors.primary,
    borderLeftWidth: 1,
    //borderBottomWidth:1,
    // elevation:0


  }
})
//export default HomeScreen;
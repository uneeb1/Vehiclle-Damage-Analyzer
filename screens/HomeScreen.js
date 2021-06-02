// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, Touchable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Cards from '../component/Cards';
import { theme } from '../core/theme';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import { CommonActions, useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    //   this.state={
    //     response:"click to connect to server"
    // }}
    //  connect =async()=>{

    //   const URL ="http://10.0.2.2:3000  "
  }

  _animation() {
    const navigation = useNavigation()
  }
  render() {

    return (
      <ScrollView>
        <View >
          <Content >
            <Card>
              <CardItem style={styles.Container1} >
                <Left>

                  <Body>

                    <Text style={styles.innerText}> Corrola </Text>
                    <Text note style={styles.innerTextNote}>Click For Corrola</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <TouchableOpacity activeOpacity={0.9}
                  onPress={() => this.props.navigation.navigate('Analyzer')}
                >
                  <Image source={require('../assets/Car.png')} style={styles.Container} />
                </TouchableOpacity>
              </CardItem>
            </Card>

            <Card>
              <CardItem style={styles.Container1} >
                <Left>

                  <Body>
                    <Text style={styles.innerText}> Cultus </Text>
                    <Text note style={styles.innerTextNote}>Click For Cultus</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <TouchableOpacity activeOpacity={0.9}
                  onPress={() => this.props.navigation.navigate('Page2')}
                >
                  <Image source={require('../assets/Cultus.png')} style={styles.Container} />
                </TouchableOpacity>
              </CardItem>

            </Card><Card>
              <CardItem style={styles.Container1} >
                <Left>

                  <Body>
                    <Text style={styles.innerText}> Swift </Text>
                    <Text note style={styles.innerTextNote}>Click For Swift</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <TouchableOpacity activeOpacity={0.9}
                  onPress={() => this.props.navigation.navigate('Page3')}
                >
                  <Image source={require('../assets/Swift.png')} style={styles.Container} />
                </TouchableOpacity>
              </CardItem>

            </Card><Card>
              <CardItem style={styles.Container1} >
                <Left>

                  <Body>
                    <Text style={styles.innerText}> Vitz </Text>
                    <Text note style={styles.innerTextNote}>Click For Vitz</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <TouchableOpacity activeOpacity={0.9}
                  onPress={() => this.props.navigation.navigate('Page4')}
                >
                  <Image source={require('../assets/Vitz.png')} style={styles.Container} />
                </TouchableOpacity>
              </CardItem>

            </Card><Card>
              <CardItem style={styles.Container1} >
                <Left>

                  <Body>
                    <Text style={styles.innerText}> Alto </Text>
                    <Text note style={styles.innerTextNote}>Click For Alto</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody style={{}}>
                <TouchableOpacity activeOpacity={0.9}
                  onPress={() => this.props.navigation.navigate('Page5')}
                >
                  <Image source={require('../assets/Alto.png')} style={styles.Container} />
                </TouchableOpacity>
              </CardItem>

            </Card><Card>
              <CardItem style={styles.Container1} >
                <Left>

                  <Body>
                    <Text style={styles.innerText}> Wagnor </Text>
                    <Text note style={styles.innerTextNote}>Click For Wagnor</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <TouchableOpacity activeOpacity={0.9}
                  onPress={() => this.props.navigation.navigate('Page6')}
                >
                  <Image source={require('../assets/Wagnor.png')} style={styles.Container} />
                </TouchableOpacity>
              </CardItem>

            </Card>
          </Content>
        </View>
      </ScrollView>

    );
  }
};
const styles = StyleSheet.create({


  Container: {

    backgroundColor: theme.colors.secondary,

    resizeMode: 'contain',
    width: wp('98%'),
    height: hp('30%'),

  },
  BodyContainer1: {

    position: 'absolute',
    bottom: hp(1),


  },
  Container1: {



    backgroundColor: theme.colors.secondary,

    height: hp('10%'),

  },

  innerText: {
    color: 'black',
    fontWeight: 'bold',


    fontSize: 30,

    fontStyle: 'italic',

  },
  innerTextNote: {
    color: 'black',
    // fontWeight:'bold',
    margin: 0,

    fontSize: 15,

    fontStyle: 'italic',

  },

})
//export default HomeScreen;
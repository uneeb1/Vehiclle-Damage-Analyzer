
import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator, TouchableOpacity, easing, Touchable, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import { theme } from '../core/theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Card } from 'react-native-paper';
import { Container } from 'native-base';

import * as Animatable from 'react-native-animatable';

export default class Page1 extends Component {

  _animation() {
    const navigation = useNavigation()
  }
  render() {
    return (

      <Container >
        <View style={{ flex: 1 }}>
          <WebView style={{ backgroundColor: '#f1eaca' }}
            originWhitelist={['*']}
            source={{ uri:'http://192.168.1.112:3000' }}
            renderLoading={this.LoadingIndicatorView}
            startInLoadingState={true}
          />
        </View>

        <View
          style={styles.row}
        >
          <View>
            <Animatable.Text animation="pulse" easing="ease-in" iterationCount="infinite"
              style={styles.label}
            > For New Car Suggestion?</Animatable.Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ProductsOverview')}>
              <Animatable.Text animation="pulse" easing="ease-in" iterationCount="infinite"
                style={styles.link}
              >
                Click Here</Animatable.Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={styles.row}
        >
          <View>
            <Animatable.Text animation="pulse" easing="ease-in" iterationCount="infinite"
              style={styles.label}
            > Want to Know Price Of Damages?</Animatable.Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('CardCorrola')}>
              <Animatable.Text animation="pulse" easing="ease-in" iterationCount="infinite"
                style={styles.link}
              >
                Click Here</Animatable.Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>

    );
  };
}

const styles = StyleSheet.create({
  link: {
    paddingLeft: wp(5),
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: theme.colors.primary,
    color: theme.colors.secondary,
    textDecorationLine: 'underline',
  },
  label: {
    fontSize: 12,
    backgroundColor: theme.colors.secondary,
    color: 'black'
  },
  row: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    // marginTop:hp(1),
    paddingLeft: wp(15),
    padding: hp(1)
  },
})
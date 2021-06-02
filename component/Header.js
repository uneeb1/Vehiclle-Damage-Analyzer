import React from 'react'
import { View, Text, StyleSheet, _Text } from 'react-native'
import { theme } from '../core/theme';
import Colors from '../constant/colors';
import { Image } from 'native-base';
const Header = props => {
  return (
    <View style={styles.header}>
    
      <Text styles={styles.headerTitle}> {props.title}</Text>
      <Text style={styles.innerText}>ONLINE SATTA</Text>
    </View>

  );

};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    //backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#307ecc',

  },
  innerText: {
    color: '#600EE6',
    fontWeight: 'bold',
    fontSize: 25,
    fontStyle: 'italic',
    marginBottom: 20
  }

});

export default Header;
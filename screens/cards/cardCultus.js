import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, Touchable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import { CommonActions, useNavigation } from '@react-navigation/native'
import { DataTable } from 'react-native-paper';
import { theme } from '../../core/theme';
import colors from '../../constant/colors';
import Cards from '../../component/Cards';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
export default class CardCorrola extends Component {
    _animation() {
        const navigation = useNavigation()
    }
    render() {

        return (
          
<View style={styles.container}>
  <ScrollView>
                <Cards style={styles.containerCard}>
                    <DataTable >
                        <DataTable.Header style={styles.Header}>
                            <DataTable.Title style={{ fontSize: 12, fontWeight: 'bold', color: 'black', backgroundColor: theme.colors.secondary }} > <Text style={styles.Text}>Class</Text></DataTable.Title>
                            <DataTable.Title numeric style={{ fontSize: 12, fontWeight: 'bold', color: 'black', backgroundColor: theme.colors.secondary }} > <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Price</Text> </DataTable.Title>

                        </DataTable.Header>

                        <DataTable.Row style={styles.Row1}>
                            <DataTable.Cell style={{ color: 'white' }} > <Text style={styles.Text2}>Broken Wind Shield</Text></DataTable.Cell>
                            <DataTable.Cell numeric> <Text style={styles.Text2}>8,000 to 11,000</Text></DataTable.Cell>
                            {/* <DataTable.Cell numeric>6.0</DataTable.Cell> */}
                        </DataTable.Row>

                        <DataTable.Row style={styles.Row2}>
                            <DataTable.Cell><Text style={styles.Text2}>Flate Tire</Text></DataTable.Cell>
                            <DataTable.Cell numeric><Text style={styles.Text2}>5,000 to 10,000</Text></DataTable.Cell>
                            {/* <DataTable.Cell numeric>8.0</DataTable.Cell> */}
                        </DataTable.Row>
                        <DataTable.Row style={styles.Row1}>
                            <DataTable.Cell><Text style={styles.Text2}>Motorcylce Accident</Text></DataTable.Cell>
                            <DataTable.Cell numeric><Text style={styles.Text2}>9,000 to 30,000</Text></DataTable.Cell>
                            {/* <DataTable.Cell numeric>8.0</DataTable.Cell> */}
                        </DataTable.Row>
                        <DataTable.Row style={styles.Row2}>
                            <DataTable.Cell><Text style={styles.Text2}>Vendalism</Text></DataTable.Cell>
                            <DataTable.Cell numeric> <Text style={styles.Text2}>25,00 to 20,000</Text></DataTable.Cell>
                            {/* <DataTable.Cell numeric>8.0</DataTable.Cell> */}
                        </DataTable.Row>



                    </DataTable>
                </Cards>
               
       </ScrollView>
          </View>
          
        )
    }
}
const styles = StyleSheet.create({

    container: {flex:1,
        backgroundColor: theme.colors.secondary,
        height: hp('100%'),
        alignContent: 'center',

    },
    containerCard: {
        margin: wp(1),
        marginTop: hp(15),
        fontWeight: 'bold',
        alignContent: 'center',
        width: wp('98%'),
        backgroundColor: theme.colors.primary

    },
    Header: {
        backgroundColor: theme.colors.secondary,
    },
    Text: {
        width: wp(99),
        fontSize: 20, fontWeight: 'bold', color: 'black'
    },
    Text2: {
        fontSize: 15, color: 'black'
    },

    Row1: {
        fontSize: 12, backgroundColor: theme.colors.primary,
    },
    Row2: {
        fontSize: 12, backgroundColor: theme.colors.secondary,
    },
});
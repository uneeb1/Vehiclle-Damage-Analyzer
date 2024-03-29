// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import { theme } from '../core/theme';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { AsyncStorage } from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage';

const CustomSidebarMenu = (props) => {
  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
          <Text style={{fontSize: 13, color:  theme.colors.primary,}}>
            {'Vehicle Damage Analyzer'.substring(0 , 8,15)}
          </Text>

        </View>
        <Text style={stylesSidebar.profileHeaderText}>
        Vehicle Damage Analyzer
        </Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={({color}) => 
            <Text style={{color: 'white'}}>
              Logout
            </Text>
          }
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              'Logout',
              'Are you sure? You want to logout?',
              [
                {
                  text: 'Cancel' ,color:'black',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {signOutUser = async () => {
                    try {
                        await firebase.auth().signOut();
                        navigate('Auth');
                    } catch (e) {
                        console.log(e);
                    }
                }
                  },
                },
              ],
              {cancelable: false},
            );
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.primary,
    paddingTop: 40,
    color: '#f1eaca',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
});
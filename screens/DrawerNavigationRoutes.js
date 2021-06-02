
// Import React
import React from 'react';
import { AsyncStorage } from 'react-native';
// Import Navigators from React Navigation
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { theme } from '../core/theme';
// Import Screens
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CustomSidebarMenu from '../component/CustomSidebarMenu';
import NavigationDrawerHeader from '../component/NavigationDrawerHeader';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: theme.colors.primary, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const settingScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: theme.colors.primary, //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'About Us', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};


const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#f1eaca',
        color: '#f1eaca',
        itemStyle: { marginVertical: 5, color: '#f1eaca' },
        labelStyle: {
          color: 'white',
        },
      }}
      screenOptions={{ headerShown: false }}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="homeScreenStack"
        options={{ drawerLabel: 'Home Screen' }}
        component={homeScreenStack}
      />
      <Drawer.Screen
        name="settingScreenStack"
        options={{ drawerLabel: 'About Us' }}
        component={settingScreenStack}
      />

    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
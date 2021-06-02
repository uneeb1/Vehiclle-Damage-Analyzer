import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, _Text } from 'react-native';
import { theme } from './core/theme';
import Loading from './screens/Loading'
import SignUp from './screens/signup'
import Page1 from './screens/page1'
import Page2 from './screens/page2'
import Page3 from './screens/page3'
import Page4 from './screens/page4'
import Page5 from './screens/page5'
import Page6 from './screens/page6'
import ProductsOverviewScreen from './screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from './screens/shop/ProductDetailScreen';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CartScreen from './screens/shop/CartScreen';

import UserProducts from './screens/admin/UserProductsScreen';
import EditProductScreen from './screens/admin/EditProductScreen';

import SplashScreen from './screens/SplashScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './component/Header';
import Login from './screens/login';
import 'react-native-gesture-handler';
import DrawerNavigationRoutes from './screens/DrawerNavigationRoutes';
import Suggestion from './screens/Sugesstion.js';
import CardCultus from './screens/cards/cardCultus';
import CardCorrola from './screens/cards/cardCorrola';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import HeaderButton from './component/UI/HeaderButton';
import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart'
import { CommonActions, useNavigation } from '@react-navigation/native'
import ordersReducer from './store/reducers/orders';
import ReduxThunk from 'redux-thunk';
import colors from './constant/colors';

const Stack = createStackNavigator();

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer
});

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  // return Font.loadAsync({
  //    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  //    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  // });
};
const Auth = () => {

  const navigation = useNavigation()
  // Stack Navigator for Login and Sign up Screen
  return (
    <Provider store={store}>
    <Stack.Navigator initialRouteName="Loading">
      <Stack.Screen
        name="Loading"
        component={Loading}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: theme.colors.primary, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      
      <Stack.Screen
        name="Analyzer"
        component={Page1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Page2"
        component={Page2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Page3"
        component={Page3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Page4"
        component={Page4}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Page5"
        component={Page5}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Page6"
        component={Page6}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="ProductsOverview"
        component={ProductsOverviewScreen}
        options={{ headerShown: true,
          headerTitle: ('ProductsOverview'
        ),
        headerTitleStyle: {
          color: theme.colors.secondary,
          // use your preferred color code
        },
           headerStyle: {
            backgroundColor: theme.colors.primary, //Set Header color
           },
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton} >
            <Item
            title='Cart' color={theme.colors.secondary}
              iconName={Platform.OS ==='android' ? 'md-cart': 'ios-cart' } 
            onPress={() => {
              navigation.navigate('Cart')
            }}
          />
      </HeaderButtons>    ),
         headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton} >
          <Item
          title='Admin'  color={theme.colors.secondary}
          // iconName={Platform.OS ==='android' ? 'md-admin': 'ios-admin'} 
          onPress={() => {
            navigation.navigate('Admin')
          }}
        />
    </HeaderButtons>    ),
      }}
      />
       <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen }
        options={{ headerShown: true,
          headerTitle: 'ProductDetail',
          headerTitleStyle: {
            color: theme.colors.secondary,
            // use your preferred color code
          },
             headerStyle: {
              backgroundColor: theme.colors.primary, //Set Header color
             },
            }}
      />
       <Stack.Screen
        name="Cart"
        component={ CartScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Admin"
        component={UserProducts}
        options={{ headerShown: true,
          headerTitle: 'Admin',
          headerTitleStyle: {
            color: theme.colors.secondary,
            // use your preferred color code
          },
             headerStyle: {
              backgroundColor: theme.colors.primary, //Set Header color
             },
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton} >
            <Item
            title='Create'  color={theme.colors.secondary}
             iconName={Platform.OS ==='android' ? 'md-create': 'ios-create'} 
            onPress={() => {
              navigation.navigate('EditProduct')
            }}
          />
      </HeaderButtons>    ),}}
      />

<Stack.Screen
        name="EditProduct"
        component={EditProductScreen}
        options={{ headerShown: true,
          headerStyle: {
            backgroundColor: theme.colors.primary, //Set Header color
           },
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton} >
            <Item
            title='Save' style={{color:theme.colors.primary}}
            iconName={
              Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'
            }
            onPress={() => {
              navigation.navigate('Cart')
            }}
          />
      </HeaderButtons>    ),
       
      }}
        
      />
      <Stack.Screen
        name="CardCorrola"
        component={CardCorrola}
        options={{  
          title: 'Analyzer', //Set Header Title
          headerStyle: {
            backgroundColor: theme.colors.primary, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
 <Stack.Screen
        name="CardCultus"
        component={CardCultus}
        options={{  
          title: 'Analyzer', //Set Header Title
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

</Provider>

  );
};

const App = () => {

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />


        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          // Hiding header for Navigation Drawer
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
</Provider>  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,




  },

});

import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  Button,
  Platform,
  ActivityIndicator,
  StyleSheet
  } from 'react-native';
  import { theme } from '../../core/theme';
import { useSelector, useDispatch } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../component/UI/HeaderButton';
import ProductItem from '../../component/shop/ProductItems';
import * as cartActions from '../../store/actions/cart';
// import Colors from '../../constants/Colors';
import * as productsActions from '../../store/actions/products';

const ProductsOverviewScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

  useEffect(()=>{
    const loadProducts = async () => {
      setIsLoading(true);
      await dispatch(productsActions.fetchProducts());
      setIsLoading(false); };
      loadProducts();
    }, [dispatch]);

const selectItemHandler = (id,title) =>{
  props.navigation.navigate('ProductDetail',{
    productId: id,
    productTitle: title
  });
};

if (isLoading) {
  return (
    <View style={styles.centered}>
      <ActivityIndicator size="large"  />
    </View>
  );
} 


  return (
    <View style={styles.Container1}>
     <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
           selectItemHandler(itemData.item.id,itemData.item.title);
          }}
        >
          <Button
             color={theme.colors.primary}
            title="View Detail"
            onPress={() => {
              selectItemHandler(itemData.item.id,itemData.item.title);
            }} />

          <Button
          color={theme.colors.primary}
            title="To Cart"
            onPress={() => {
              dispatch(cartActions.addToCart(itemData.item));
            }} />
            
        </ProductItem>
      )}
    />
</View>
  );
};

ProductsOverviewScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Products',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Admin'
          // iconName={Platform.OS ==='android' ? 'md-admin': 'ios-admin'} 
          onPress={() => {
            navData.navigation.navigate('Admin')
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Cart'
          iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          onPress={() => {
            navData.navigation.navigate('Cart')
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  Container1: {
    flex: 1,

    backgroundColor: theme.colors.secondary,

  },

});


export default ProductsOverviewScreen;

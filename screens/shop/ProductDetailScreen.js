import React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../../store/actions/cart';

import { theme } from '../../core/theme';
// import cart from '../../store/reducers/cart';

 ProductDetailScreen = props => {
    const productId =props.route.params.productId;
    const selectedProduct = useSelector(state =>
        state.products.availableProducts.find(prod => prod.id === productId)
    );

    const dispatch = useDispatch();
    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
            <View style={styles.actions}>
                <Button  color={theme.colors.primary} title="Add to Cart " onPress={() => {
                    dispatch(cartActions.addToCart(selectedProduct));
                }} />
            </View>
            <Text style={styles.price}>${selectedProduct.price}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    );
};

ProductDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    };
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    actions: {
        marginVertical: 10,
        alignItems: 'center'
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20,
        //   fontFamily: 'open-sans-bold'
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20,
        //    fontFamily:'open-sans'


    }

});

export default ProductDetailScreen;
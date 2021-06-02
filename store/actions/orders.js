import CartItem from "../../models/cart-item";
import { ADD_TO_CART } from "./cart";

export const ADD_ORDER ='ADD_ORDER';

export const addOrder = (CartItems, totalAmount)=>{
    return {
        type:ADD_ORDER,
        orderData:{ items: CartItems, amount: totalAmount }
    }
} 
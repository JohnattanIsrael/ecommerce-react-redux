import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT
} from '../actions/types';

const INITIAL_STATE = {
    cartProducts: [],
    purchases: [],
    purchaseDetail: {
        _id: -1,
        total: 0,
        orderNumber: '',
        orderDate: null,
        creditCard: '',
        user: {
            name: '',
            shippingAddress: '',
        }
    }
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_CART_PRODUCT:
            var exists = false;
            const newCartProduct =action.payload;
            var cartProducts = []
            state.cartProducts.map(cartProduct => {
                if(cartProduct.product._id == newCartProduct._id) {
                    exists = true
                    cartProduct.quantity += 1
                }
                cartProducts.push(cartProduct);
            })
            if(exists == false) {
                cartProducts.push({
                    _id: state.cartProducts.length + 1,
                    product: newCartProduct,
                    quantity: 1
                })
            }
            return {
                ...state,
                cartProducts: cartProducts
            }
        case SET_CART_PRODUCTS:
            return {
                ...state,
                cartProducts: action.payload
            }
        case SET_USER_PURCHASES:
            return {
                ...state,
                purchases: action.payload
            }

        case SET_PURCHASE_DETAIL:
            let purchaseDetail;
            state.purchases.map(purchase => {
                if (purchase._id == action.payload) {
                    purchaseDetail = purchase;
                }
            })
            return {
                ...state,
                purchaseDetail
            }
        default: return state;
    }
}
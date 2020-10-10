import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT
} from './types';

export function setPurchaseDetail(_id) {

    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function addCartProduct(product) {
    return({
        type:ADD_CART_PRODUCT,
        payload: product,
        quantity: 1
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                _id:0,
                product: {
                    _id: 0,
                    title: 'Javascripts in the Browser',
                    description: "The FitnessGram PACER Test is a multistage aerobic capacity test that progressively gets more difficult as it continues The test is used to measure a students aerobic capacity as part of the FitnessGram assessment.",
                    price: 1.99,
                    belongsTo: [0, 1],
                    imageUrl: 'http://via.placeholder.com/80x80'
                },
                quantity: 2
            },
            {
                _id:1,
                product: {
                    _id: 1,
                    title: 'Graph database',
                    description: "The FitnessGram PACER Test is a multistage aerobic capacity test that progressively gets more difficult as it continues The test is used to measure a students aerobic capacity as part of the FitnessGram assessment.",
                    price: 1.99,
                    belongsTo: [0, 6],
                    imageUrl: 'http://via.placeholder.com/80x80'
                },
                quantity: 1
            }
        ]
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 8,
                total: 19.47,
                orderNumber: 'AADF948840',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Mr Shopper',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 29.37,
                orderNumber: 'AGVJH8840',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Cleons Family',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 2,
                total: 3.89,
                orderNumber: 'HDJD783840',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Johna Angeles',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 3,
                total: 74.20,
                orderNumber: 'LSJD790840',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Leon Musk',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 4,
                total: 48.27,
                orderNumber: '0KSJJSJ40',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Stary Crace',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 5,
                total: 99.44,
                orderNumber: '737HJKDMD0',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jamb Curtis',
                    shippingAdress: '1234 West State Street'
                }
            },
            {
                _id: 6,
                total: 11.23,
                orderNumber: 'JDLAL2230',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Trim Bull',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 7,
                total: 8.30,
                orderNumber: 'ASGD794840',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Papric Foland',
                    shippingAddress: '1234 East State Street'
                }
            }
        ]
    })
}
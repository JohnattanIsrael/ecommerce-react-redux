import {
    SET_USER_PURCHASES
} from './types';

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id:0,
                total: 19.47,
                orderNumber: 'AADF948840',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Mr Shopper',
                    shippingAdresss: '1234 West State Street'
                }
            },
            {
                _id:1,
                total: 29.37,
                orderNumber: 'AGVJH8840',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Cleons Family',
                    shippingAdresss: '1234 West State Street'
                }
            },
            {
                _id:2,
                total: 3.89,
                orderNumber: 'HDJD783840',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Johna Angeles',
                    shippingAdresss: '1234 West State Street'
                }
            },
            {
                _id:3,
                total: 74.20,
                orderNumber: 'LSJD790840',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Leon Musk',
                    shippingAdresss: '1234 West State Street'
                }
            },
            {
                _id:4,
                total: 48.27,
                orderNumber: '0KSJJSJ40',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Stary Crace',
                    shippingAdresss: '1234 West State Street'
                }
            },
            {
                _id:5,
                total: 99.44,
                orderNumber: '737HJKDMD0',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jamb Curtis',
                    shippingAdresss: '1234 West State Street'
                }
            },
            {
                _id:6,
                total: 11.23,
                orderNumber: 'JDLAL2230',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Trim Bull',
                    shippingAdresss: '1234 West State Street'
                }
            },
            {
                _id:7,
                total: 8.30,
                orderNumber: 'ASGD794840',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Papric Foland',
                    shippingAdresss: '1234 East State Street'
                }
            }
        ]
    })
}
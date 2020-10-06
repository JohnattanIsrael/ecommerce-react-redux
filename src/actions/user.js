import {
    SET_USER_PURCHASES
} from './types';

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id:0,
                title: 'Purchase One',
                amount: 8.02
            },
            {
                _id:1,
                title: 'Purchase Two',
                amount: 19.47            }
        ]
    })
}
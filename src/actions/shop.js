import {
    // SET_SHOP_CATEGORIES
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS
} from './types';

export function fetchShopCategories() {
    return({
        // type: SET_SHOP_CATEGORIES,
        type: SET_NAVBAR_LINKS,
        payload:  [
            {
                _id: 0,
                title: 'All'
            },
            {
                _id: 1,
                title: 'Javascript'
            },
            {
                _id: 2,
                title: 'UI/UX'
            },
            {
                _id: 3,
                title: 'Python'
            },
            {
                _id: 4,
                title: 'UML'
            },
            {
                _id: 5,
                title: 'Ruby'
            },
            {
                _id: 6,
                title: 'Linux'
            }
        ]
    })
}
export function fetchShopProducts() {
    return({
        type: SET_SHOP_PRODUCTS,
        payload:  [
            {
                _id: 0,
                title: 'Javascripts in the Browser',
                description:"The FitnessGram PACER Test is a multistage aerobic capacity test that progressively gets more difficult as it continues The test is used to measure a students aerobic capacity as part of the FitnessGram assessment. Students run back and forth as many times as they can, each lap signaled by a beep sound. The test get progressively faster as it continues until the student reaches their max lap score.",
                price: 1.99,
                belongsTo: [0, 1]
            },
            {
                _id: 1,
                title: 'Graph database',
                description:"The FitnessGram PACER Test is a multistage aerobic capacity test that progressively gets more difficult as it continues The test is used to measure a students aerobic capacity as part of the FitnessGram assessment. Students run back and forth as many times as they can, each lap signaled by a beep sound. The test get progressively faster as it continues until the student reaches their max lap score.",
                price: 1.99,
                belongsTo: [0, 6]
            },
            {
                _id: 2,
                title: 'Fullsatck development',
                description:"The FitnessGram PACER Test is a multistage aerobic capacity test that progressively gets more difficult as it continues The test is used to measure a students aerobic capacity as part of the FitnessGram assessment. Students run back and forth as many times as they can, each lap signaled by a beep sound. The test get progressively faster as it continues until the student reaches their max lap score.",
                price: 1.99,
                belongsTo: [0, 1, 3]
            },
            {
                _id: 3,
                title: 'Javascript developement',
                description:"The FitnessGram PACER Test is a multistage aerobic capacity test that progressively gets more difficult as it continues The test is used to measure a students aerobic capacity as part of the FitnessGram assessment. Students run back and forth as many times as they can, each lap signaled by a beep sound. The test get progressively faster as it continues until the student reaches their max lap score.",
                price: 1.99,
                belongsTo: [0, 1]
            },
            {
                _id: 4,
                title: 'User Experience Design',
                description:"The FitnessGram PACER Test is a multistage aerobic capacity test that progressively gets more difficult as it continues The test is used to measure a students aerobic capacity as part of the FitnessGram assessment. Students run back and forth as many times as they can, each lap signaled by a beep sound. The test get progressively faster as it continues until the student reaches their max lap score.",
                price: 1.99,
                belongsTo: [0, 2]
            },
            {
                _id: 4,
                title: 'User Interfase Design',
                description:"The FitnessGram PACER Test is a multistage aerobic capacity test that progressively gets more difficult as it continues The test is used to measure a students aerobic capacity as part of the FitnessGram assessment. Students run back and forth as many times as they can, each lap signaled by a beep sound. The test get progressively faster as it continues until the student reaches their max lap score.",
                price: 1.99,
                belongsTo: [0, 2]
            },
            {
                _id: 5,
                title: 'ObjectOriented Programmins',
                description:"The FitnessGram PACER Test is a multistage aerobic capacity test that progressively gets more difficult as it continues The test is used to measure a students aerobic capacity as part of the FitnessGram assessment. Students run back and forth as many times as they can, each lap signaled by a beep sound. The test get progressively faster as it continues until the student reaches their max lap score.",
                price: 1.99,
                belongsTo: [0, 3]
            },
            {
                _id: 6,
                title: 'Advanved Op',
                description:"The FitnessGram PACER Test is a multistage aerobic capacity test that progressively gets more difficult as it continues The test is used to measure a students aerobic capacity as part of the FitnessGram assessment. Students run back and forth as many times as they can, each lap signaled by a beep sound. The test get progressively faster as it continues until the student reaches their max lap score.",
                price: 1.88,
                belongsTo: [0, 5]
            }
        ]
    })
}
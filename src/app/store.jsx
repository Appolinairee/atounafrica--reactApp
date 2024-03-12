import { configureStore } from "@reduxjs/toolkit";
import { PouletCroquant, SuperCremeux } from "../common/models";

let state = {
    value: null,
    list: [
        SuperCremeux,
        PouletCroquant,
    ]
};


const reducer = (currentState, action ) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            const listWithNewProduct = [...currentState.list, action.payload]
            return {...currentState, list: listWithNewProduct}
        case 'REMOVE_PRODUCT':
            const list = currentState.list.filter(
                (item, index) => index !== action.payload
            )
            return {...currentState, list: list}
        case 'APPLY_VOUCHER':
            const withVoucherList = currentState.list.map(
                        item => item.title === 'Super Crémeux' ? ({...item, price: action.payload.price}) : item
            )
            return {...currentState, list: withVoucherList}

        case 'UPDATE_FIRSTNAME':
            const owner = {...currentState.owner, firstName: action.payload}
            return {...currentState, owner}
        default:
            return currentState
    }
}


export const store = configureStore(
    {
        preloadedState: state,
        reducer
    }
)
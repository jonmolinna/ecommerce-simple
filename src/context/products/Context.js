import { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const INITIAL_STATE = {
    products: [],
    cart: [],
}

export const ContextProduct = createContext(INITIAL_STATE);

export const ContextProviderProduct = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    return (
        <ContextProduct.Provider
            value={{
                products: state.products,
                cart: state.cart,
                dispatch
            }}
        >
            {children}
        </ContextProduct.Provider>
    )
};
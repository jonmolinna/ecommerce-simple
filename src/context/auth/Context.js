import { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const INITIAL_STATE = {
    auth: null,
}

export const ContextAuth = createContext(INITIAL_STATE);

export const ContextProviderAuth = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    return (
        <ContextAuth.Provider
            value={{
                auth: state.auth,
                dispatch
            }}
        >
            {children}
        </ContextAuth.Provider>
    )
};
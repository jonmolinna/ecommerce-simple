const Reducer = (state, action) => {
    switch (action.type) {
        case "ADD_ALL_PRODUCTS": {
            return {
                ...state,
                products: action.payload,
            }
        }
        case "ADD_ONE_PRODUCT_TO_CART": {
            const itemInCart = state.cart.find(item => item.idproduct === action.payload.idproduct && item.size === action.payload.size)
            return itemInCart ?
                {
                    ...state
                } : {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
        }
        case "REMOVE_PRODUCT_TO_CART": {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }
        case "ADD_QUANTITY_TO_PRODUCT": {
            const productInCart = state.cart.find(item => item.id === action.payload.id)
            return {
                ...state,
                cart: state.cart.map(item => item.id === productInCart.id ? { ...item, quantity: item.quantity + 1 } : item)
            }
        }
        case "MINUS_QUANTITY_TO_PRODUCT": {
            const productInCart = state.cart.find(item => item.id === action.payload.id)
            return {
                ...state,
                cart: state.cart.map(item => item.id === productInCart.id ? { ...item, quantity: item.quantity <= 1 ? 1 : item.quantity - 1 } : item)
            }
        }
        default:
            return state;
    }
};

export default Reducer;
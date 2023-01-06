import React, { useContext } from 'react';
import { TrashIcon, PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline'
import { numberWithCommas } from '../utils/format';
import { ContextProduct } from '../context/products/Context';

const ShoppingCard = ({ product }) => {
    const { dispatch } = useContext(ContextProduct);

    const removeProductToCart = (id) => {
        dispatch({
            type: "REMOVE_PRODUCT_TO_CART",
            payload: id,
        })
    };

    const addQuantityToProduct = (product) => {
        dispatch({
            type: "ADD_QUANTITY_TO_PRODUCT",
            payload: product,
        })
    }

    const minusQuantityToProduct = (product) => {
        dispatch({
            type: "MINUS_QUANTITY_TO_PRODUCT",
            payload: product,
        })
    }

    return (
        <div className='bg-white p-3'>
            <div className='flow-root'>
                <ul className='-my-6 divide-y divide-gray-200'>
                    <li className='flex py-6'>
                        <div className='h-32 w-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                            <img
                                src={product.imagen}
                                alt={product.name}
                                className='h-full w-full object-cover object-center'
                            />
                        </div>

                        <div className='ml-4 flex flex-1 flex-col'>
                            <div>
                                <div className='flex justify-between text-base font-medium text-gray-900'>
                                    <h3>
                                        <a href="index.html">{product.name}</a>
                                    </h3>
                                    <p className='ml-4'>S/. {numberWithCommas(product.price)}</p>
                                </div>
                                <p className='mt-1 text-sm text-gray-500'>Color: {product.color}</p>
                                <p className='mt-1 text-sm text-gray-500'>Talla: {product.size}</p>
                            </div>
                            <div className='flex items-center justify-between mt-3'>
                                <div className='flex space-x-1'>
                                    <button
                                        onClick={() => minusQuantityToProduct(product)}
                                    >
                                        <MinusCircleIcon className='h-6 w-6' />
                                    </button>
                                    <p>{product.quantity}</p>
                                    <button
                                        onClick={() => addQuantityToProduct(product)}
                                    >
                                        <PlusCircleIcon className='h-6 w-6' />
                                    </button>
                                </div>
                                <div className='flex'>
                                    <button onClick={() => removeProductToCart(product.id)}>
                                        <TrashIcon className='h-5 w-5' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ShoppingCard
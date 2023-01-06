import React, { useContext } from 'react';
import { ShoppingCartIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { UserIcon as UserSolidIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { ContextProduct } from '../context/products/Context';
import { ContextAuth } from '../context/auth/Context';

const Header = () => {
    const { cart } = useContext(ContextProduct);
    const { auth, dispatch } = useContext(ContextAuth);

    const quantityProducts = cart.reduce((item, product) => (item + product.quantity), 0)

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT",
        })
    }

    return (
        <div className='bg-white sticky top-0 w-full z-50 border-b-2 border-gray-200'>
            <div className='max-w-5xl mx-auto'>
                <div className='p-3 flex justify-between'>
                    <Link
                        to='/'
                        className='text-2xl text-black hover:text-gray-500 cursor-pointer'
                    >
                        Geynco
                    </Link>
                    <div className='hidden md:block'>
                        <div className='relative rounded-md shadow-sm w-96'>
                            <input
                                type="text"
                                placeholder='Buscar'
                                name='search'
                                className='block w-full rounded-md border-gray-300 pr-8 focus:border-gray-400 focus:ring-gray-400'
                            />
                            <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
                                <MagnifyingGlassIcon className='h-5 w-5 text-gray-500' />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        {
                            auth ? (
                                <button
                                    onClick={handleLogout}
                                    className='inline-flex relative items-center p-[0.7px] overflow-hidden bg-gray-600 rounded-full'
                                >
                                    <UserSolidIcon className='h-6 w-6 text-gray-200' />
                                </button>
                            ) : (
                                <Link to='/login'>
                                    <button className='inline-flex relative items-center p-1 text-sm font-medium text-center text-black hover:text-gray-500'>
                                        <UserIcon className='h-6 w-6' />
                                    </button>
                                </Link>
                            )
                        }
                        <Link to='/shopping'>
                            <button className='inline-flex relative items-center p-1 text-sm font-medium text-center text-black hover:text-gray-500'>
                                <ShoppingCartIcon className='h-6 w-6' />
                                {
                                    quantityProducts > 0 && (
                                        <div className='inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs text-white bg-red-500 rounded-full border-2 '>
                                            {quantityProducts}
                                        </div>
                                    )
                                }
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
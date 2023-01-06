import React, { useContext } from 'react';
import ShoppingCard from '../component/ShoppingCard';
import Layout from '../layouts/Layout';
import { ContextProduct } from '../context/products/Context';
import { numberWithCommas, numberTwoDecimal } from '../utils/format'

const Shopping = () => {
    const { cart } = useContext(ContextProduct);

    const quantityProducts = cart.reduce((item, product) => (item + product.quantity), 0)
    const totalPriceProducts = cart.reduce((item, product) => (item + (product.quantity * product.price)), 0)

    return (
        <Layout>
            <div className='mt-5'>
                <div className='max-w-5xl mx-auto'>
                    <div className='mx-3 md:mx-none'>
                        {
                            cart.length > 0 ? (
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-9 min-h-[70vh]'>
                                    <div>
                                        <div className='grid grid-cols-1 gap-y-6 order-2 md:order-1'>
                                            {
                                                cart.map(product => (
                                                    <ShoppingCard
                                                        key={product.id}
                                                        product={product}
                                                    />
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className='order-1 md:order-2'>
                                        <div className='bg-white'>
                                            <div className='border border-gray-200 py-6 px-4'>
                                                <div className='flex justify-between text-gray-500 text-base'>
                                                    <p>Sub Total</p>
                                                    <p>S/. {numberWithCommas(numberTwoDecimal(totalPriceProducts))}</p>
                                                </div>
                                                <div className='flex justify-between text-gray-500 text-base'>
                                                    <p>Productos</p>
                                                    <p>{quantityProducts}</p>
                                                </div>
                                                <div className='flex justify-between mt-2 text-black font-medium text-lg'>
                                                    <p>Total</p>
                                                    <p>S/. {numberWithCommas(numberTwoDecimal(totalPriceProducts))}</p>
                                                </div>
                                                <div className='mt-7 flex'>
                                                    <button className='text-white uppercase bg-green-600 hover:bg-green-700 font-medium rounded-lg px-5 py-2.5 w-full'>
                                                        Continuar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className='min-h-[70vh]'>
                                    <div className='flex items-center justify-center mt-10'>
                                        <div className='text-center'>
                                            <p className='text-xl text-gray-900 font-medium'>
                                                Tu carrito está vacío
                                            </p>
                                            <p className='text-gray-500 text-lg'>
                                                Parece que todavía no has agregado nada a tu carrito.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div >
        </Layout >
    )
}

export default Shopping;
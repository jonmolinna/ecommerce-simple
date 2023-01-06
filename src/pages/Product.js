import React, { useContext, useState } from 'react';
import Layout from '../layouts/Layout';
import { useParams } from 'react-router-dom';
import { ContextProduct } from '../context/products/Context';
import { numberWithCommas } from '../utils/format';
import toast, { Toaster } from 'react-hot-toast';


const Product = () => {
    const { dispatch, products } = useContext(ContextProduct);
    const [selectSize, setSelectSize] = useState("");
    const { id } = useParams();

    const product = products.find(product => product.id === id)

    const addProductToCart = (productCart) => {
        const product = {
            id: new Date().getTime().toString(),
            idproduct: productCart.id,
            imagen: productCart.imagen,
            name: productCart.name,
            price: productCart.sale,
            color: productCart.color,
            size: selectSize,
            quantity: 1
        }

        dispatch({
            type: "ADD_ONE_PRODUCT_TO_CART",
            payload: product,
        })
        toast.success('Agregado correctamente.')
    };

    return (
        <Layout>
            <div className='mt-5'>
                <div className='max-w-5xl mx-auto'>
                    <div className='mx-3 md:mx-none'>
                        {
                            product ? (
                                <div className='grid w-full grid-cols-12 items-start gap-y-8 gap-x-6'>
                                    <div className='aspect-w-2 aspect-h-3 overflow-hidden rounded-lg col-span-12 md:col-span-5'>
                                        <img
                                            src={product.imagen}
                                            alt={product.name}
                                            className='object-cover object-center'
                                        />
                                    </div>
                                    <div className='col-span-12 md:col-span-7 bg-white p-3'>
                                        <h2 className='text-2xl font-bold text-gray-900'>{product.name}</h2>
                                        <p className='text-lg font-bold text-gray-600'>{product.description}</p>
                                        <section className='flex items-center justify-center my-7'>
                                            <p className='text-3xl font-bold text-gray-900'>S/. {numberWithCommas(product.sale)}</p>
                                        </section>
                                        <section className='flex'>
                                            <p className='mr-1'>Color:</p>
                                            <p>{product.color}</p>
                                        </section>
                                        <section className='mt-4'>
                                            <div>
                                                <label htmlFor="" className='block mb-2 font-medium'>Elegir Talla</label>
                                                <select
                                                    name=""
                                                    id=""
                                                    className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5'
                                                    value={selectSize}
                                                    onChange={(e) => setSelectSize(e.target.value)}
                                                >
                                                    <option value="">---</option>
                                                    {
                                                        product.stocks.map(stock => (
                                                            <option value={stock.size} key={stock.size}>
                                                                {stock.size}
                                                            </option>
                                                        ))
                                                    }
                                                </select>
                                                <button
                                                    onClick={() => addProductToCart(product)}
                                                    disabled={!selectSize}
                                                    className='text-white uppercase bg-green-600 hover:bg-green-700 disabled:bg-green-300 font-medium rounded-md px-5 py-2.5 block w-full mt-3'
                                                >
                                                    Agregar al carrito
                                                </button>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            ) : (
                                <div className='h-[60vh]'>
                                    <div className='mt-20 text-center'>
                                        <h3 className='font-bold text-2xl'> Oops!</h3>
                                        <p className='text-gray-700 mt-4 text-lg'>No se encontro el producto</p>

                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <Toaster
                position='top-right'
                toastOptions={{
                    className: '',
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#fff',
                        background: '#374151',
                    },
                }}
            />
        </Layout>
    )
}

export default Product;
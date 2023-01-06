import React, { useContext, useEffect } from 'react';
import { products as data } from '../utils/data';
import { ContextProduct } from '../context/products/Context';
import FeedCard from '../component/FeedCard';
import Layout from '../layouts/Layout';

const Feed = () => {
    const { dispatch, products } = useContext(ContextProduct);

    useEffect(() => {
        dispatch({
            type: "ADD_ALL_PRODUCTS",
            payload: data,
        })

    }, [dispatch]);

    return (
        <Layout>
            <div className='bg-gray-200'>
                <div className="max-w-5xl mx-auto">
                    <div className='md:mx-3 relative brightness-75'>
                        <img
                            className='object-cover w-full h-96 object-center'
                            src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1672176046/Gecko/banner-simple_lq9rch.jpg"
                            alt=""
                        />
                    </div>
                    {
                        products.length > 0 ? (
                            <div className='mt-6 mx-3'>
                                <div className='grid grid-cols-1 gap-y-5 gap-x-2 sm:grid-cols-2 lg:grid-cols-4'>
                                    {
                                        products.map(product => (
                                            <FeedCard key={product.id} product={product} />
                                        ))
                                    }
                                </div>
                            </div>
                        ) : (
                            <div className="mx-3">
                                <div className="mt-6 h-[30vh]">
                                    <p className="text-lg font-normal text-black">No hay productos</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Feed;
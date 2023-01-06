import React from 'react';
import { numberWithCommas } from '../utils/format';
import { Link } from 'react-router-dom';

const FeedCard = ({ product }) => {

    return (
        <Link to={`product/${product.id}`}>
            <div
                className='relative bg-white group cursor-pointer'
            >
                <div className='h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md  group-hover:opacity-75 lg:aspect-none lg:h-80'>
                    <img
                        src={product.imagen}
                        alt={product.name}
                        className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                    />
                </div>
                <div className='mt-1 flex flex-col justify-between p-2'>
                    <div className='flex justify-between'>
                        <h3 className='text-black text-lg font-semibold'>
                            {product.name}
                        </h3>
                        <p className="text-lg font-semibold text-gray-900">
                            S/.{numberWithCommas(product.sale)}
                        </p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                        {product.description}
                    </p>
                </div>
            </div>
        </Link>
    )
};

export default FeedCard;
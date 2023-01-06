import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className='min-h-screen bg-gray-200'>
            <div className='flex items-center justify-center'>
                <div className='mt-[20vh] text-center space-y-3'>
                    <h1 className='text-2xl text-gray-900 font-semibold'>
                        Oops!
                    </h1>
                    <p className='text-lg text-gray-700 font-normal'>
                        Lo sentimos, se ha producido un error inesperado.
                    </p>
                    <p className='text-base text-gray-700 font-normal'>
                        {error.statusText || error.message}
                    </p>
                    <Link
                        to="/"
                        className='inline-block bg-green-600 py-1 px-3 text-white rounded-md hover:bg-green-500'
                    >
                        Volver a inicio
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
import React from 'react';
import Header from '../component/Header';

const Layout = ({ children }) => {
    return (
        <div className='bg-gray-200'>
            <Header />
            <div>
                {children}
            </div>
            <div className='mt-6 border'>
                <div className='bg-white text-center p-5'>
                    <p>Hecho por Geynco</p>
                </div>
            </div>
        </div>
    )
}

export default Layout;
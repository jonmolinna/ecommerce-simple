import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContextAuth } from '../context/auth/Context';

const initialForm = {
    email: "",
    password: "",
}

const Login = () => {
    const [form, setForm] = useState(initialForm);
    const { dispatch } = useContext(ContextAuth);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "AUTHENTICATION_USER",
            payload: form,
        })
        setForm(initialForm);
        navigate('/')
    }

    return (
        <div className='min-h-screen bg-gray-200'>
            <div className='flex justify-center items-center '>
                <div className='mt-20 w-full'>
                    <div className=' mx-auto w-[90%] max-w-md space-y-8 bg-white p-5 shadow-md rounded-md'>
                        <Link to="/">
                            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 hover:text-gray-700">
                                Geynco
                            </h2>
                        </Link>
                        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                            <div className="space-y-4 rounded-md shadow-sm">
                                <input
                                    type="email"
                                    required
                                    name='email'
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder='Correo electrónico'
                                    className='relative block w-full appearance-none rounded-none rounded-t-md border border-green-500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500'
                                />
                                <input
                                    type="password"
                                    required
                                    name='password'
                                    value={form.password}
                                    onChange={handleChange}
                                    placeholder='Contraseña'
                                    className='relative block w-full appearance-none rounded-none rounded-t-md border border-green-500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500'
                                />
                                <button
                                    disabled={!(form.email && form.password)}
                                    className='group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 hover:bg-green-700 disabled:bg-green-400 py-2 px-4 font-medium text-white'
                                >
                                    Iniciar sesión
                                </button>
                            </div>
                        </form>
                        <div className='text-center'>
                            <Link
                                to='/'
                                className='text-gray-500 font-medium text-base hover:text-gray-400'
                            >
                                Volver a inicio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
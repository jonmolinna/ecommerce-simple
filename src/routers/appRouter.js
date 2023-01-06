
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import Feed from '../pages/Feed';
import Login from '../pages/Login';
import Product from '../pages/Product';
import Shopping from '../pages/Shopping';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Feed />,
        errorElement: <ErrorPage />
    },
    {
        path: '/shopping',
        element: <Shopping />
    }
    ,
    {
        path: '/product/:id',
        element: <Product />
    },
    {
        path: '/login',
        element: <Login />
    }
])

export default router;
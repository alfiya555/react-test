import { lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

const MainPage = lazy(() => import('../pages/MainPage'));
const BasePageWrapper = lazy(() => import('../components/baseComponents/BasePageWrapper'));
const TextWrapper = lazy(() => import('../pages/TextWrapper'));
const UserForm = lazy(() => import('../pages/UserForm'));
const UserFormContainer = lazy(() => import('../containers/UserListContainer'));

const mockItems = ['app', 'eCommerce', 'analytics', 'banking', 'booking', 'file', 'mail', 'chat', 'calendar', 'canban'].map((item) => ({
    element: <TextWrapper text={item} />,
    path: `/${item}`,
}));

const mockUserItems = ['settings', 'cards', 'list', 'create', 'edit', 'account'].map((item) => ({
    element: <TextWrapper text={item} />,
    path: `/user/${item}`,
}));

const mockProductItems = ['list', 'details', 'create', 'edit'].map((item) => ({
    element: <TextWrapper text={item} />,
    path: `/product/${item}`,
}));

export const routerObject = [
    {
        element: <BasePageWrapper/>,
        path: '/',
        children: [
            {
                index: true,
                element: <MainPage/>,
            },
            {
                element: <UserFormContainer />,
                path: '/user/profile',
            },
            ...mockItems,
            ...mockUserItems,
            ...mockProductItems,
        ],
    },
    {
        path: '*',
        element: <Navigate to='/' />,
    },
];

export const router = createBrowserRouter(routerObject);
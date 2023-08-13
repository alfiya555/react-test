import {
    MdSpeed,
    MdOutlineShoppingBag,
    MdOutlineInsertChartOutlined,
    MdOutlineFoundation,
    MdOutlineAirplanemodeActive,
    MdInsertDriveFile,
    MdSpatialAudioOff,
    MdRedeem,
    MdEmail,
    MdMarkUnreadChatAlt,
    MdOutlineCalendarMonth,
    MdOutlineViewKanban,
} from 'react-icons/md';
import { lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

export const navigationItems = [
    {
        headerCode: 'overview',
        items: [
            {
                titleCode: 'app',
                path: '/app',
                icon: MdSpeed,
            },
            {
                titleCode: 'eCommerce',
                path: '/eCommerce',
                icon: MdOutlineShoppingBag,
            },
            {
                titleCode: 'analytics',
                path: '/analytics',
                icon: MdOutlineInsertChartOutlined,
            },
            {
                titleCode: 'banking',
                path: '/banking',
                icon: MdOutlineFoundation,
            },
            {
                titleCode: 'booking',
                path: '/booking',
                icon: MdOutlineAirplanemodeActive,
            },
            {
                titleCode: 'file',
                path: '/file',
                icon: MdInsertDriveFile,
            },
        ],
    },
    {
        headerCode: 'managment',
        items: [
            {
                titleCode: 'user',
                path: '/user',
                icon: MdSpatialAudioOff,
                children: [
                    {
                        titleCode: 'profile',
                        path: '/user/profile',
                    },
                    {
                        titleCode: 'cards',
                        path: '/user/cards',
                    },
                    {
                        titleCode: 'list',
                        path: '/user/list',
                    },
                    {
                        titleCode: 'create',
                        path: '/user/create',
                    },
                    {
                        titleCode: 'edit',
                        path: '/user/edit',
                    },
                    {
                        titleCode: 'account',
                        path: '/user/account',
                    },
                ],
            },
            {
                titleCode: 'product',
                path: '/product',
                icon: MdRedeem,
                children: [
                    {
                        titleCode: 'list',
                        path: '/product/list',
                    },
                    {
                        titleCode: 'details',
                        path: '/product/details',
                    },
                    {
                        titleCode: 'create',
                        path: '/product/create',
                    },
                    {
                        titleCode: 'edit',
                        path: '/product/edit',
                    },
                ]
            },
            {
                titleCode: 'mail',
                path: '/mail',
                icon: MdEmail,
            },
            {
                titleCode: 'chat',
                path: '/chat',
                icon: MdMarkUnreadChatAlt,
            },
            {
                titleCode: 'calendar',
                path: '/calendar',
                icon: MdOutlineCalendarMonth,
            },
            {
                titleCode: 'kanban',
                path: '/kanban',
                icon: MdOutlineViewKanban,
            },
        ],
    },
];
import { useTranslation } from 'react-i18next';
import {Box, Flex, Icon, Menu, MenuButton, MenuItem, MenuList, Divider, Avatar, AvatarBadge} from '@chakra-ui/react';
import {MdSearch, MdNotifications, MdOutlineSettings} from "react-icons/md";
import {useCallback, useMemo} from "react";
import FlagImg from "./FlagImg";
import {useNavigate} from "react-router-dom";
import SettingsBtn from "./SettingsBtn";

function Header({ isSmallNav }: { isSmallNav: boolean }) {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const openPage = useCallback((item: { titleCode: string, path: string }) => {
        navigate(item.path);
    }, [navigate]);

    const currentLang = useMemo(() => {
        return i18n.language;
    }, [i18n.language]);

    const langs = [
        {
            value: 'en',
            label: 'English',
            flag: 'eng',
        },
        {
            value: 'ru',
            label: 'Русский',
            flag: 'ru',
        },
        {
            value: 'fr',
            label: 'Française',
            flag: 'fr',
        },
    ];
    const profileItems = [
        {
            titleCode: 'home',
            path: '/',
        },
        {
            titleCode: 'profile',
            path: '/user/profile',
        },
        {
            titleCode: 'settings',
            path: '/user/settings',
        },
    ];

    return (
        <Flex zIndex={1000} position='fixed' top={0} right={0} width={isSmallNav ? 'calc(100% - 88px)' : 'calc(100% - 280px)'} backgroundColor='rgba(255,255,255,0.2)' height='70px' direction='row' justifyContent='space-between' alignItems='center'>
            <Box ml={10}><Icon color='colorForeground2' boxSize={6} as={MdSearch}/></Box>
            <Flex direction='row' gap={4} mr={4} alignItems='center'>
                <Menu>
                    <MenuButton>
                        <FlagImg lang={currentLang} />
                    </MenuButton>

                    <MenuList zIndex={1000}>
                        {langs.map(item => (<MenuItem key={item.value} onClick={() => changeLanguage(item.value)} >
                            <Flex direction='row' gap={4} alignItems='center'>
                                <FlagImg lang={item.value} />
                                {item.label}
                            </Flex>
                        </MenuItem>))}
                    </MenuList>
                </Menu>
                <Icon color='colorForeground2' boxSize={6} as={MdNotifications}/>
                <SettingsBtn />
                <Menu>
                    <MenuButton>
                        <Avatar size='sm'>
                            <AvatarBadge borderColor='papayawhip' bg='tomato' boxSize='1.25em' />
                        </Avatar>
                    </MenuButton>

                    <MenuList zIndex={1000}>
                        <Flex direction='column' px={4} py={2}>
                            <Flex pb={1} fontWeight={600}>Name Lastname</Flex>
                            <Flex>email@mail.com</Flex>
                        </Flex>
                        <Divider orientation='horizontal' />
                        {profileItems.map(item => (<MenuItem key={item.titleCode} onClick={() => openPage(item)} >
                            <Flex direction='row' gap={4} alignItems='center'>
                                {t(item.titleCode)}
                            </Flex>
                        </MenuItem>))}
                    </MenuList>
                </Menu>
            </Flex>
        </Flex>
    );
}

export default Header;
import {Flex, Icon, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react';
import {memo, useMemo} from 'react';
import {useLocation} from 'react-router-dom';
import {useTranslation} from "react-i18next";
import {
    MdArrowRight
} from 'react-icons/md';

interface Props {
    navItem: {
        titleCode: string;
        icon?: any;
        path?: string;
        children?: {
            titleCode: string;
            icon?: any;
            path?: string;
        }[];
    };
    onClick?: () => void;
    onClickChild?: (item: {
        titleCode: string;
        icon?: any;
        path?: string;
    }) => void;
    children?: any;
    key?: string | number;
    icon?: any;
    isSmallNav: boolean;
}

const NavigationItem = ({navItem, onClick, children, key, icon, isSmallNav, onClickChild}: Props) => {
    const {t} = useTranslation();
    const location = useLocation();
    const isActive = useMemo(() => {
        return (item: any) => {
            return item.path === location.pathname;
        };
    }, [location]);

    return (
        <Flex key={key} mb={1} onClick={!isSmallNav || !navItem.children ? onClick : undefined} backgroundColor={isActive(navItem) ? 'rgb(189, 240, 228)' : ''}
              px={isSmallNav ? 0 : 3} borderRadius='8px' cursor='pointer'
              _hover={{backgroundColor: isActive(navItem) ? 'rgb(143, 227, 207)' : '#0000000a'}} direction={isSmallNav ? 'column' : 'row'} alignItems='center'
              width='100%' height={isSmallNav ? '58px' : '44px'}>
            {(navItem.icon || icon) && (<Flex>
                <Icon color='grey' mt={isSmallNav ? 2 : 0} boxSize={navItem.icon ? 6 : 2} as={navItem.icon || icon}/>
                    {isSmallNav && navItem.children && (<Menu>
                    <MenuButton>
                        <Icon color='colorForeground2' mt={isSmallNav ? 2 : 0} boxSize={4} as={MdArrowRight}/>
                    </MenuButton>

                    <MenuList zIndex={1000}>
                        {navItem.children.map(item => (<MenuItem key={item.path} onClick={() => onClickChild && onClickChild(item)}>{t(item.titleCode)}</MenuItem>))}
                    </MenuList>
                </Menu>)}
            </Flex>) }
            <Flex ml={isSmallNav ? 0 : 4} color={isActive(navItem) ? 'rgb(0, 167, 111)' : 'rgb(145, 158, 171)'} textOverflow='ellipsis' fontSize={isSmallNav ? '10px' : '0.875rem'} fontFamily={"Public Sans, sans-serif"}
                  maxWidth='100%' wrap='nowrap' whiteSpace='nowrap' textAlign='center' fontWeight={600}>{t(navItem.titleCode)}</Flex>
            <Flex flex={1}/>
            {!isSmallNav && children}
        </Flex>
    )
        ;
};

export default memo(NavigationItem);

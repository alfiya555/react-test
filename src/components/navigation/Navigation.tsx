import { useTranslation } from 'react-i18next';
import { Box, Flex, Button, Image } from '@chakra-ui/react';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import { navigationItems } from "../../constants/navigationItems";
import { useNavigate, useLocation } from 'react-router-dom';
import {useCallback, useMemo} from "react";
import NavigationItem from "./NavigationItem";
import NavigationPanel from "./NavigationPanel";

function Navigation({ isSmallNav }: { isSmallNav: boolean; onClickChangeSize: any }) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const goTo = useCallback((path: string) => {
        navigate(path);
    }, [navigate]);

    return (
        <Flex mr={3} zIndex={1} position='absolute' left={0} top={0} borderRight='1px dashed rgba(145, 158, 171, 0.2)' height='100vh' overflowY={'auto'} overflowX={'hidden'} width={isSmallNav ? '88px' : '280px'}>
            <Flex py={4} px={isSmallNav ? 1 : 4} direction='column' width='100%' height='100%' overflowY={'hidden'} _hover={{ overflowY: 'auto'}} overflowX={'hidden'}>
                <Image ml={4} src="logo.png" alt="Logo" width='50px' cursor='pointer' onClick={() => goTo('/')} />
                {navigationItems.map((item, index) => <NavigationPanel key={index} items={item.items} title={item.headerCode} isSmallNav={isSmallNav} />)}
            </Flex>
        </Flex>
    );
}

export default Navigation;
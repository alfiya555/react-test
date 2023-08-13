import { memo, useEffect } from 'react';
import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();

    const onOpenEdit = () => {
        navigate('/documents/123/edit');
    };

    return (
        <Flex flexDirection='column' pt={6} pr={12} pl={12} width='100%' height='100%'>
            MaaaaainPaaaaage
        </Flex>
    );
};

export default memo(MainPage);
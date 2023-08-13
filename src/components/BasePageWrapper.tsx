import React, {useCallback, useState, Suspense} from 'react';
import Navigation from "./Navigation";
import Header from "./Header";
import { Outlet } from 'react-router-dom';
import {Box, Button, Spinner} from "@chakra-ui/react";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";

function BasePageWrapper() {
    const [isSmallNav, setIsSmallNav] = useState(false);
    const handleChangeSize = useCallback(() => {
        setIsSmallNav(!isSmallNav);
    }, [isSmallNav]);

  return (
    <Box width='100%' height='100%'>
        <Button onClick={handleChangeSize} type='button'
                backgroundColor='rgba(255, 255, 255, 0.48)'
                textStyle='lineMedium'
                mr='2'
                position='absolute'
                left={isSmallNav ? '78px' : '270px'}
                top='22px'
                border='1px dashed rgba(145, 158, 171, 0.2)'
                borderRadius='50%'
                width='20px'
                minWidth='20px'
                height='20px'
                color='rgb(99, 115, 129)'
                m={0}
                p={0}
                zIndex={1001}
        >
            {isSmallNav ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </Button>
      <Navigation isSmallNav={isSmallNav} onClickChangeSize={handleChangeSize} />
        <Header isSmallNav={isSmallNav} />
        <Suspense fallback={<Box mb={6}>
            <Spinner thickness='4px' speed='0.65s' emptyColor='#eef4ff' color='mainAccent' size='xl' />
        </Box>}>
            <Box position='fixed' left={isSmallNav ? '88px' : '280px'} top='70px'>
                <Outlet />
            </Box>
        </Suspense>
    </Box>
  );
}

export default BasePageWrapper;

import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, useDisclosure,
    Button, Icon,
    Flex, Box, useColorMode,
} from '@chakra-ui/react';
import {useRef, useState} from "react";
import {MdOutlineSettings, MdSunny, MdWbCloudy} from "react-icons/md";
import {useTranslation} from "react-i18next";
import {Themes} from "../constants/themes";

function SettingsBtn() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = useRef(null);
    const {t} = useTranslation();
    const [theme, setTheme] = useState(Themes.light);
    const { colorMode, toggleColorMode } = useColorMode();

    const themeItems = [
        {
            value: Themes.light,
            icon: MdSunny,
        },
        {
            value: Themes.dark,
            icon: MdWbCloudy,
        }
    ];

    return (
        <>
            <Button ref={btnRef} onClick={onOpen} p={0} backgroundColor='transparent'>
                <Icon color='colorForeground2' boxSize={6} as={MdOutlineSettings}/>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>{t('settings')}</DrawerHeader>

                    <DrawerBody>
                        <Flex direction='row' gap={4}>
                            {themeItems.map((item) => (
                                <Box as={Button} key={item.value} height='80px' cursor='pointer' borderRadius={'8px'}
                                      justifyContent='center' alignItems='center'
                                      border={'1px solid rgba(145, 158, 171, 0.08)'} flex={1}
                                      onClick={toggleColorMode} boxShadow={'rgba(145, 158, 171, 0.08) -24px 8px 24px -4px'}
                                >
                                    <Icon color={item.value === colorMode ? '#00A76F' : 'colorForeground2'} boxSize={6} as={item.icon}/>
                                </Box>
                            ))}
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SettingsBtn;
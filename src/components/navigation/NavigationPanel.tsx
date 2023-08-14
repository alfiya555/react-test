import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Flex} from '@chakra-ui/react';
import {memo, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {useTranslation} from "react-i18next";
import NavigationItem from "./NavigationItem";
import { MdFiberManualRecord } from "react-icons/md";

interface Props {
    items: {
        titleCode: string;
        icon?: any;
        path?: string;
        children?: {
            titleCode: string;
            icon?: any;
            path?: string;
        }[];
    }[];
    title?: string;
    key?: string | number;
    isSmallNav: boolean;
}

const NavigationPanel = ({items, key, title, isSmallNav}: Props) => {
    const {t} = useTranslation();
    const navigate = useNavigate();

    const goTo = useCallback((path?: string) => {
        if (path) {
            navigate(path);
        }
    }, [navigate]);

    return (
        <Flex direction='column' width='100%' key={key}>
            {!isSmallNav && title && <Flex textTransform={'uppercase'} p={2} color={'rgb(145, 158, 171)'} _hover={{color: 'rgb(33, 43, 54)'}} fontSize={'11px'}
                            fontFamily={"Public Sans, sans-serif"} fontWeight={700}>{t(title)}</Flex>}
            {items.map((navItem, index) => {
                if (!navItem.children || isSmallNav) {
                    return <NavigationItem key={index} navItem={navItem as any} onClick={() => goTo(navItem.path)}
                                           onClickChild={(childItem) => goTo(childItem.path)} isSmallNav={isSmallNav} />
                } else {
                    return (<Accordion allowMultiple border={'none'} key={index}>
                        <AccordionItem key={index} border={'none'}>
                            <AccordionButton border={'none'} p={0} m={0} _hover={{backgroundColor: 'none'}}>
                                <NavigationItem navItem={navItem as any} isSmallNav={isSmallNav}>
                                    <AccordionIcon/>
                                </NavigationItem>
                            </AccordionButton>
                            <AccordionPanel p={'0 0 0 16px'}>
                                {navItem.children.map((child, childIndex: number) => (
                                    <NavigationItem
                                        icon={MdFiberManualRecord}
                                        key={`${index},${childIndex}`}
                                        navItem={child}
                                        onClick={() => goTo(child.path)}
                                        isSmallNav={isSmallNav}
                                    />
                                ))}
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>)
                }
            })}
        </Flex>
    );
};

export default memo(NavigationPanel);

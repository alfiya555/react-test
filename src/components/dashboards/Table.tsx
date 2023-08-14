import {memo, useMemo} from 'react';
import {
    Flex,
    Box,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

const TableDashboard = ({ title }: { title: string }) => {
    const columns = [
        {
            title: 'Invoice ID',
            value: 'id',
        },
        {
            title: 'Category',
            value: 'category',
        },
        {
            title: 'Price',
            value: 'price',
        },
        {
            title: 'Status',
            value: 'status',
        },
    ];
    const data: Record<string, string>[] = [
        {
            id: 'INV-1990',
            category: 'Android',
            price: '$83.74',
            status: 'Paid',
        },
        {
            id: 'INV-1991',
            category: 'Mac',
            price: '$83.74',
            status: 'Out Of Date',
        },
        {
            id: 'INV-1992',
            category: 'Windows',
            price: '$83.74',
            status: 'Progress',
        },
        {
            id: 'INV-1993',
            category: 'Android',
            price: '$83.74',
            status: 'Paid',
        },
        {
            id: 'INV-1994',
            category: 'Mac',
            price: '$83.74',
            status: 'Paid',
        },
    ];
    const bgColor = useMemo(() => {
        return (status: string) => {
            switch (status) {
                case 'Paid':
                    return 'rgba(34, 197, 94, 0.16)';
                case 'Out Of Date':
                    return 'rgba(255, 86, 48, 0.16)';
                case 'Progress':
                    return 'rgba(255, 171, 0, 0.16)';
                default:
                    return '';
            }
        }
    }, []);
    const color = useMemo(() => {
        return (status: string) => {
            switch (status) {
                case 'Paid':
                    return 'rgb(17, 141, 87)';
                case 'Out Of Date':
                    return 'rgb(183, 29, 24)';
                case 'Progress':
                    return 'rgb(183, 110, 0)';
                default:
                    return '';
            }
        }
    }, []);

    return (
        <Flex flexDirection='column' width={'100%'} borderRadius={'16px'} boxShadow={'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px'}>
            <Box fontSize={'14px'} fontWeight={600} p={6}>{ title }</Box>
            <Flex width={'100%'}>
                <TableContainer width={'100%'}>
                    <Table variant='simple' width={'100%'}>
                        <Thead>
                            <Tr backgroundColor={'#ebeded'}>
                                {columns.map((header) => (<Th key={header.value}>{ header.title }</Th>))}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map((item) => (
                                <Tr key={item.id}>
                                    {columns.map((header) => (<Td key={`${header.value}${item.id}`}>
                                        {header.value === 'status' ? (<Flex width={'fit-content'} p={'6px'} fontSize={'12px'} fontWeight={700} borderRadius={'6px'} backgroundColor={bgColor(item[header.value])} color={color(item[header.value])}>
                                                {item[header.value]}
                                        </Flex>) : item[header.value]}
                                    </Td>))}
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Flex>
        </Flex>
    );
};

export default memo(TableDashboard);
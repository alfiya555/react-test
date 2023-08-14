import { memo } from 'react';
import {Box, Flex, Icon} from '@chakra-ui/react';
import {MdArrowCircleDown, MdArrowCircleUp} from "react-icons/md";
import { Column } from '@ant-design/plots';

const SmallChart = ({ title, percentage, amount, color = 'blue' }: { title: string, percentage: number, amount: string, color?: string }) => {
    const data = new Array(10).fill(null).map((item, index) => ({
        type: index,
        value: Math.random()*100,
    }))
    const config = {
        data,
        width: 60,
        color,
        xField: 'type',
        yField: 'value',
        xAxis: {
            label: null,
            grid: null,
        },
        yAxis: {
            label: null,
            grid: null,
        },
    };

    return (
        <Flex flexDirection='row' justifyContent={'space-between'} height={'166px'} width={'100%'} p={6} borderRadius={'16px'} boxShadow={'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px'}>
            <Flex flexDirection={'column'} height={'100%'} justifyContent={'space-between'}>
                <Box fontSize={'14px'} fontWeight={600} mb={2}>{ title }</Box>
                <Flex flexDirection={'row'} alignItems={'center'}><Icon mr={1} color={percentage > 0 ? 'green' : 'red'} boxSize={6} as={percentage > 0 ? MdArrowCircleUp : MdArrowCircleDown}/>{ `${percentage > 0 ? '+' : ''}${percentage}` }%</Flex>
                <Box fontSize={'32px'} fontWeight={700}>{ amount }</Box>
            </Flex>
            <Flex width={'60px'}>
                <Column {...config} />
            </Flex>
        </Flex>
    );
};

export default memo(SmallChart);
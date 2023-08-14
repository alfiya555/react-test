import { memo } from 'react';
import {Box, Flex} from '@chakra-ui/react';
import { Pie } from '@ant-design/plots';

const DonutChart = ({ title }: { title: string }) => {
    const data = [
        {
            type: "Mac",
            value: 12244,
        },
        {
            type: "Windows",
            value: 53345,
        },
        {
            type: "IOS",
            value: 34533,
        },
        {
            type: "Android",
            value: 78302,
        },
    ];
    const config = {
        appendPadding: 10,
        width: 350,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.9,
        label: {
            type: 'spider',
            offset: '-50%',
            content: '{value}',
        },
        itemValue: null,
        legend: {
            layout: 'horizontal' as "horizontal" | "vertical" | undefined,
            position: 'bottom' as any,
        },
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],
    };

    return (
        <Flex flexDirection='column' justifyContent={'space-between'} height={'492px'} width={'100%'} p={6} borderRadius={'16px'} boxShadow={'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px'}>
            <Box fontSize={'14px'} fontWeight={600} mb={2}>{ title }</Box>
            <Flex width={'100%'}>
                <Pie {...config} />
            </Flex>
        </Flex>
    );
};

export default memo(DonutChart);
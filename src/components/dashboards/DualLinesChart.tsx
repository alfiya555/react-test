import { memo } from 'react';
import {Box, Flex} from '@chakra-ui/react';
import { DualAxes } from '@ant-design/plots';

const DualLinesChart = ({ title }: { title: string }) => {
    const data = [
        {
            month: 'Jan',
            Asia: 10,
            America: 10,
        },
        {
            month: 'Feb',
            Asia: 41,
            America: 34,
        },
        {
            month: 'Mar',
            Asia: 35,
            America: 13,
        },
        {
            month: 'Apr',
            Asia: 51,
            America: 56,
        },
        {
            month: 'May',
            Asia: 49,
            America: 77,
        },
        {
            month: 'Jun',
            Asia: 62,
            America: 88,
        },
        {
            month: 'Jul',
            Asia: 69,
            America: 99,
        },
        {
            month: 'Aug',
            Asia: 91,
            America: 77,
        },
        {
            month: 'Sep',
            Asia: 148,
            America: 45,
        },
        {
            month: 'Oct',
            Asia: 35,
            America: 13,
        },
        {
            month: 'Nov',
            Asia: 51,
            America: 56,
        },
        {
            month: 'Dec',
            Asia: 49,
            America: 77,
        },
    ];
    const config = {
        data: [data, data],
        xField: 'month',
        yField: ['Asia', 'America'],
        geometryOptions: [
            {
                geometry: 'line',
                color: 'green',
                smooth: true,
            },
            {
                geometry: 'line',
                color: 'yellow',
                smooth: true,
            },
        ],
    };

    return (
        <Flex flexDirection='column' justifyContent={'space-between'} height={'492px'} width={'100%'} p={6} borderRadius={'16px'} boxShadow={'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px'}>
            <Box fontSize={'14px'} fontWeight={600} mb={2}>{ title }</Box>
            <Flex width={'100%'}>
                <DualAxes {...config} />
            </Flex>
        </Flex>
    );
};

export default memo(DualLinesChart);
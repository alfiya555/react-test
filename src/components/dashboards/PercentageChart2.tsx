import { memo } from 'react';
import {Box, Flex, Icon} from '@chakra-ui/react';
import { Gauge } from '@ant-design/plots';
import {MdEmail} from "react-icons/md";

const PercentageChart = () => {
    const config = {
        width: 86,
        percent: 0.48,
        range: {
            color: 'l(0) 0:#78f1fa 1:#43d6e0',
        },
        startAngle: 0,
        endAngle: 2 * Math.PI,
        indicator: false as any,
        statistic: {
            title: {
                style: {
                    fontSize: '16px',
                    color: 'white',
                },
                formatter: () => '48%',
            },
        },
    };

    return (
        <Flex flexDirection='row' backgroundColor={'#006C9C'} justifyContent={'space-between'} alignItems={'center'} height={'135px'} width={'100%'} p={6} borderRadius={'16px'} boxShadow={'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px'}>
            <Flex mr={3}>
                <Gauge {...config} />
            </Flex>
            <Flex flexDirection={'column'} color={'white'}>
                <Box fontSize={'24px'} fontWeight={700}>55,566</Box>
                <Box fontSize={'14px'} opacity={0.6} fontWeight={500}>Applications</Box>
            </Flex>
            <Icon color='white' boxSize={24} as={MdEmail} opacity={0.2} transform={'translateX(25%)'}/>
        </Flex>
    );
};

export default memo(PercentageChart);
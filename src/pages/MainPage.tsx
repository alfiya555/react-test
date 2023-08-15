import { memo } from 'react';
import { Flex } from '@chakra-ui/react';
import SmallChart from "../components/dashboards/SmallChart";
import DonutChart from "../components/dashboards/DonutChart";
import DualLinesChart from "../components/dashboards/DualLinesChart";
import PercentageChart from "../components/dashboards/PercentageChart";
import PercentageChart2 from "../components/dashboards/PercentageChart2";
import TableDashboard from "../components/dashboards/Table";
import {useTranslation} from "react-i18next";

const MainPage = () => {
    const {t} = useTranslation();
    return (
        <Flex flexDirection='row' flexWrap={'wrap'} gap={'18px'} p={6} width='100%' height='100%' overflow={'auto'}>
            <Flex width={'calc(33% - 12px)'}>
                <SmallChart title={t('Total Active Users')} percentage={2.6} amount={'18,765'} color={'green'} />
            </Flex>
            <Flex width={'calc(33% - 12px)'}>
                <SmallChart title={t('Total Installed')} percentage={0.2} amount={'4,876'} color={'blue'} />
            </Flex>
            <Flex width={'calc(33% - 12px)'}>
                <SmallChart title={t('Total Downloads')} percentage={-0.1} amount={'678'} color={'yellow'} />
            </Flex>
            <Flex>
                <DonutChart title={t('Current Download')} />
            </Flex>
            <Flex flex={1}>
                <DualLinesChart title={t('Area Installed')} />
            </Flex>
            <Flex flex={1}>
                <TableDashboard title={t('New Invoice')} />
            </Flex>
            <Flex width={'300px'} flexDirection={'column'} gap={'12px'}>
                <PercentageChart />
                <PercentageChart2 />
            </Flex>
        </Flex>
    );
};

export default memo(MainPage);
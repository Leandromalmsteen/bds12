import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from '../sales-by-store/helpers';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
};

function PieChartCard({ labels = [], name, series = [] }: Props) {
  return (
    <div>
      <ReactApexChart
        options={buildPieChartConfig(labels, name)}
        type="donut"
        width={260}
        height={310}
        series={series}
      />
    </div>
  );
}

export default PieChartCard;

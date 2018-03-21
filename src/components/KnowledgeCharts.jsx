import React from 'react';
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
import knowledge from '../data/knowledge';

const KnowledgeCharts = () => (
  <ResponsiveContainer>
    <RadialBarChart
      width={830}
      height={450}
      innerRadius="10%"
      outerRadius="80%"
      data={knowledge}
      startAngle={180}
      endAngle={0}
    >
      <RadialBar
        minAngle={15}
        label={{ fill: '#fff', position: 'insideStart' }}
        background
        clockWise
        legendType="circle"
        dataKey="value"
      />
      <Legend
        iconSize={20}
        width={120}
        height={120}
        layout="vertical"
        verticalAlign="middle"
        align="right"
        margin={
          {
            top: 0, left: 0, right: 0, bottom: 0,
          }
        }
      />
      <Tooltip />
    </RadialBarChart>
  </ResponsiveContainer>
);

export default KnowledgeCharts;

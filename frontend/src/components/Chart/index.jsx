import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area, AreaChart,
} from 'recharts';
import { TolltipContainer } from './styles.js';
import { useContext } from 'react';
import { WalletContext } from '../../features/wallet/context/index.jsx';
import { Text } from '../Text/index.jsx';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <TolltipContainer>
        <Text>{ `${ label } : ${ payload[0].value }` }</Text>
      </TolltipContainer>
    );
  }
  return null;
};


export const Chart = () => {
  const { totalByTag } = useContext(WalletContext);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={totalByTag}
        margin={{
          top: 15,
          right: 25,
          left: -10,
          bottom: 60,
        }}
      >
        <defs>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor={'#00C49F'}
              stopOpacity={0.5}
            />
            <stop
              offset="95%"
              stopColor={'#00C49F'}
              stopOpacity={0}
            />
          </linearGradient>
          <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor={'#FF8042'}
              stopOpacity={0.5}
            />
            <stop
              offset="95%"
              stopColor={'#FF8042'}
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="tag"
          tickLine={false}
          style={{ fontSize: "10px" }}
        />
        <YAxis
          tickLine={false}
          axisLine={{ strokeWidth: "0" }}
          style={{ fontSize: "10px" }}
        />
        <Tooltip content={<CustomTooltip/>} />
        <Area
          type="monotone"
          dataKey="amount"
          dot={true}
          stroke={'#00C49F'}
          fillOpacity={1}
          fill="url(#colorRevenue)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};


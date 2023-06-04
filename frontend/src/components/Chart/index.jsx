import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import { TolltipContainer } from './styles.js';

const data = [
  { tag: 'Lazer', gastos: 4000, meta: 2400 },
  { tag: 'Alimentação', gastos: 3000, meta: 1398 },
  { tag: 'Transporte', gastos: 2000, meta: 9800 },
  { tag: 'Saúde', gastos: 2780, meta: 3908 },
  { tag: 'Outros', gastos: 1890, meta: 4800 },
  { tag: 'Investimentos', gastos: 2390, meta: 3800 },
  { tag: 'Educação', gastos: 3490, meta: 4300 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <TolltipContainer>
        <p className="label">{ `${ label } : ${ payload[0].value }` }</p>
        <p className="label">{ `${ payload[1].dataKey } : ${ payload[1].value }` }</p>
      </TolltipContainer>
    );
  }
  return null;
};


export const Chart = () => {

  return (
    <ResponsiveContainer width="100%" height="90%">
      <BarChart width={ 730 } height={ 250 } data={ data } barSize={ 30 }>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="tag"/>
        <YAxis/>
        <Tooltip content={ <CustomTooltip/> } cursor={ { fill: 'rgba(47, 47, 76, 0.5)' } }/>
        <Legend/>
        <Bar dataKey="gastos" fill="#ffff"/>
        <Bar dataKey="meta" fill="#82ca9d"/>
      </BarChart>
    </ResponsiveContainer>
  );
};


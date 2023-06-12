import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import { TolltipContainer } from './styles.js';
import { useContext } from 'react';
import { ExpensesContext } from '../../features/expenses/context/index.jsx';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <TolltipContainer>
        <p className="label">{ `${ label } : ${ payload[0].value }` }</p>

      </TolltipContainer>
    );
  }
  return null;
};


export const Chart = () => {
  const { totalByTag } = useContext(ExpensesContext);

  return (
    <ResponsiveContainer width="100%" height="90%">
      <BarChart width={ 730 } data={ totalByTag } height={ 250 } barSize={ 30 }>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="tag"/>
        <YAxis/>
        <Tooltip content={ <CustomTooltip/> } cursor={ { fill: 'rgba(47, 47, 76, 0.5)' } }/>
        <Bar dataKey="amount" fill="#57fefe"/>
      </BarChart>
    </ResponsiveContainer>
  );
};


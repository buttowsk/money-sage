import {
  EditIcon,
  DeleteIcon,
  VerticalMoreIcon, TransactionIcon,
} from './styles.js';
import { useContext, useState } from 'react';
import { WalletContext } from '../../context/index.jsx';
import { ExpenseModal } from '../Modal/index.jsx';
import { FlexContainer } from '../../../../components/FlexContainer/index.jsx';
import { Text } from '../../../../components/Text/index.jsx';


export const TransactionCard = ({ transaction, type }) => {
  const [moreOptions, setMoreOptions] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { deleteTransaction } = useContext(WalletContext);

  const handleDelete = () => {
    deleteTransaction(type, transaction.id);
  };

  return (
    <FlexContainer key={ transaction.id } direction={ 'column' } shadow={ '0 0 8px 1px rgba(0, 0, 0, 0.75)' } position={'relative'}>
      { isOpen && <ExpenseModal setIsOpen={ setIsOpen } expense={ transaction }/> }
      <FlexContainer width={ '100%' } padding={ '2rem' } justify={ 'space-between' }>
        { type === 'expense' ? <TransactionIcon/> : <TransactionIcon $income/> }
        <Text type={ 'span' } weight={ '700' } size={ '2rem' }>
          { transaction.description }
        </Text>
        <FlexContainer>
          <EditIcon appear={ moreOptions ? 'true' : undefined } onClick={ () => setIsOpen(!isOpen) }/>
          <DeleteIcon appear={ moreOptions ? 'true' : undefined } onClick={ handleDelete }/>
          <VerticalMoreIcon onClick={ () => setMoreOptions(!moreOptions) } more={ moreOptions ? 'true' : undefined }/>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer width={ '100%' } direction={ 'column' } padding={ '2rem' } gap={ '1.5rem' }>
        <FlexContainer width={ '100%' } justify={ 'space-between' }>
          <Text weight={ '600' }>Quantidade</Text>
          <Text weight={ '600' }>{ transaction.amount }</Text>
        </FlexContainer>
        <FlexContainer width={ '100%' } justify={ 'space-between' }>
          <Text weight={ '600' }>Forma de pagamento</Text>
          <Text weight={ '600' }>{ transaction.payment_type }</Text>
        </FlexContainer>
        <FlexContainer width={ '100%' } justify={ 'space-between' }>
          <Text weight={ '600' }>Moeda</Text>
          <Text weight={ '600' }>{ transaction.currency }</Text>
        </FlexContainer>
        <FlexContainer width={ '100%' } justify={ 'space-between' }>
          <Text weight={ '600' }>Tag</Text>
          <Text weight={ '600' }>{ transaction.tag }</Text>
        </FlexContainer>
        <FlexContainer width={ '100%' } justify={ 'space-between' }>
          <Text weight={ '600' }>Taxa de câmbio</Text>
          <Text weight={ '600' }>{ transaction.exchange_rate }</Text>
        </FlexContainer>
        <FlexContainer width={ '100%' } justify={ 'space-between' }>
          <Text weight={ '600' }>Conversão</Text>
          <Text weight={ '600' }>{ transaction.converted_amount } BRL</Text>
        </FlexContainer>
        <Text weight={ '700' }>Criado em { transaction.created_at }</Text>
      </FlexContainer>
    </FlexContainer>
  );
};
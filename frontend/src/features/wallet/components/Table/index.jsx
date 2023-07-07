import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { WalletContext } from '../../context/index.jsx';
import {
  Container, EditIcon, DeleteIcon, TransactionIcon,
} from './styles.js';
import { FlexContainer } from '../../../../components/FlexContainer/index.jsx';
import { Text } from '../../../../components/Text/index.jsx';
import { ExpenseModal } from '../Modal/index.jsx';

export const TransactionsTable = () => {
  const { incomes, expenses, deleteTransaction } = useContext(WalletContext);
  const [moreOptions, setMoreOptions] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = (type, transaction_id) => {
    deleteTransaction(type, transaction_id);
  };

  if (incomes.length === 0) {
    return (
      <FlexContainer direction={ 'column' } gap={ '2rem' } padding={ '2rem 0' } width={ '100%' }
                     height={ '100%' } justify={ 'center' }>
        <Text size={ '2rem' } weight={ '700' } align={ 'center' }>Não há transações registradas</Text>
      </FlexContainer>);
  }
  console.log(incomes);

  return (
    <Container>
      { isOpen && <ExpenseModal setIsOpen={ setIsOpen } transaction={ transaction }/> }
      <Table variant="simple" minH={ 'full' } overflow={ 'auto' }>
        <TableCaption>Transações</TableCaption>
        <Thead>
          <Tr fontSize={ '3xl' }>
            <Th>Descrição</Th>
            <Th>Moeda</Th>
            <Th>Tag</Th>
            <Th>Forma de pagamento</Th>
            <Th isNumeric>Quantidade</Th>
            <Th isNumeric>Quantidade convertida</Th>
            <Th isNumeric>Data</Th>
            <Th>Opções</Th>
          </Tr>
        </Thead>
        <Tbody>
          { incomes.reverse().map((income) => (
            <Tr key={ income.id }>
              <Td>
                <FlexContainer>
                  <TransactionIcon $income/>
                  { income.description }
                </FlexContainer>
              </Td>
              <Td>{ income.currency }</Td>
              <Td>{ income.tag }</Td>
              <Td>{ income.payment_type }</Td>
              <Td isNumeric>{ income.amount }</Td>
              <Td isNumeric>{ income.converted_amount }</Td>
              <Td isNumeric>{ new Date(income.created_at).toLocaleString() }</Td>
              <Td>
                <FlexContainer width={ 'fit-content' }>
                  <EditIcon onClick={ () => setIsOpen(!isOpen) }/>
                  <DeleteIcon onClick={ () => handleDelete(income.type, income.id) }/>
                </FlexContainer>
              </Td>
            </Tr>
          )) }
          { expenses.reverse().map((expense) => (
            <Tr key={ expense.id }>
              <Td>
                <FlexContainer>
                  <TransactionIcon/> { expense.description }
                </FlexContainer>
              </Td>

              <Td>{ expense.currency }</Td>
              <Td>{ expense.tag }</Td>
              <Td>{ expense.payment_type }</Td>
              <Td isNumeric>{ expense.amount }</Td>
              <Td isNumeric>{ expense.converted_amount }</Td>
              <Td isNumeric>{ new Date(expense.created_at).toLocaleString() }</Td>
              <Td>
                <FlexContainer width={ 'fit-content' }>
                  <EditIcon onClick={ () => setIsOpen(!isOpen) }/>
                  <DeleteIcon onClick={ () => handleDelete(expense.type, expense.id) }/>
                </FlexContainer>
              </Td>
            </Tr>
          )) }
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Descrição</Th>
            <Th isNumeric>Valor</Th>
            <Th isNumeric>Data</Th>
            <Th isNumeric>Tipo</Th>
          </Tr>
        </Tfoot>
      </Table>
    </Container>
  );
};
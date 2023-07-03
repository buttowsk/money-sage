import {
  CardContainer,
  Avatar,
  SettingsIcon,
  ChangeCurrencyButton,
  OpenCurrenciesButton,
  LogoutButton,
  NewExpenseButton, ExpenseIcon, IncomeIcon,
} from './styles.js';
import { FlexContainer } from '../../../../components/FlexContainer/index.jsx';
import { Text } from '../../../../components/Text/index.jsx';
import logo from '../../../../assets/logo.png';
import ReactCountryFlag from 'react-country-flag';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../authentication/context/index.jsx';
import { WalletContext } from '../../../wallet/context/index.jsx';
import { ExpenseModal } from '../../../wallet/components/Modal/index.jsx';

export const ProfileCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentUser, handleLogout } = useContext(AuthContext);
  const { totalExpenses, totalIncomes, currencies } = useContext(WalletContext);
  const [expenses, setExpenses] = useState(totalExpenses);
  const [incomes, setIncomes] = useState(totalIncomes);
  const [currency, setCurrency] = useState('BRL');
  const [flag, setFlag] = useState('BR');
  const [isCurrenciesOpen, setIsCurrenciesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNewExpenseClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    setExpenses(totalExpenses);
    setIncomes(totalIncomes);
    if (currency === 'BRL') {
      setIncomes(totalIncomes);
      setExpenses(totalExpenses);
      setFlag('BR');
    } else if (currency === 'USD') {
      const usdCurrency = currencies.find((c) => c.code === 'USD')?.ask;
      setIncomes((totalIncomes / usdCurrency).toFixed(2));
      setExpenses((totalExpenses / usdCurrency).toFixed(2));
      setFlag('US');
    } else if (currency === 'EUR') {
      const eurCurrency = currencies.find((c) => c.code === 'EUR')?.ask;
      setIncomes((totalIncomes / eurCurrency).toFixed(2));
      setExpenses((totalExpenses / eurCurrency).toFixed(2));
      setFlag('EU');
    }
  }, [totalExpenses, totalIncomes, currency]);

  const handleCurrencyChange = (currency) => {
    setCurrency(currency);
    setIsCurrenciesOpen(false);
  };

  const handleOpenCurrencies = () => {
    setIsCurrenciesOpen(!isCurrenciesOpen);
  };

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoutClick = async () => {
    await handleLogout();
  };


  return (
    <CardContainer>
      { isModalOpen && <ExpenseModal setIsOpen={ setIsModalOpen }/> }
      { isMenuOpen && (
        <FlexContainer position={ 'absolute' } direction={ 'column' } bgColor={ 'primary' }
                       shadow={ '0 15px 30px rgba(0, 0, 0, 0.45)' } padding={ '1rem 2rem' } top={ '3rem' }
                       right={ '.5rem' } zIndex={ '1' }>
          <Text type={ 'navlink' } to={ '/config' }>Configurações</Text>
          <Text type={ 'navlink' } to={ '/profile' }>Perfil</Text>
          <LogoutButton onClick={ handleLogoutClick } to={ '/authentication' }>Logout</LogoutButton>
        </FlexContainer>
      ) }
      <SettingsIcon onClick={ handleOpenMenu }/>

      <FlexContainer>
        <Avatar src={ currentUser?.picture || logo }/>
        <Text type={ 'span' } size={ '2rem' }>{ currentUser?.email }</Text>
      </FlexContainer>
      <FlexContainer width={ '100%' } direction={ 'column' } align={ 'start' }>
        <FlexContainer position={ 'relative' } width={ '100%' } justify={ 'space-between' }>
          <Text type={ 'span' } size={ '2rem' } weight={ '700' }>Transações</Text>
          <FlexContainer>
            <FlexContainer>
              <ReactCountryFlag
                countryCode={ flag }
                svg
                style={ {
                  width: '100%',
                  height: '3rem',
                  borderRadius: '50%',
                } }
              />
            </FlexContainer>
            <OpenCurrenciesButton onClick={ handleOpenCurrencies } open={ isCurrenciesOpen ? 'opened' : '' }/>
            { isCurrenciesOpen && (
              <FlexContainer direction={ 'column' } position={ 'absolute' } padding={ '1rem 2rem' }
                             bg={ 'rgba(0, 196, 159, .6)' } backdrop={ 'blur(10px)' }
                             top={ '3.5rem' } right={ '.5rem' }>
                <ChangeCurrencyButton onClick={ () => handleCurrencyChange('BRL') }>
                  <Text weight={ '700' }>BRL</Text>
                </ChangeCurrencyButton>
                <ChangeCurrencyButton onClick={ () => handleCurrencyChange('USD') }>
                  <Text weight={ '700' }>USD</Text>
                </ChangeCurrencyButton>
                <ChangeCurrencyButton onClick={ () => handleCurrencyChange('EUR') }>
                  <Text weight={ '700' }>EUR</Text>
                </ChangeCurrencyButton>
              </FlexContainer>
            ) }
          </FlexContainer>
        </FlexContainer>
        <FlexContainer width={ '100%' } direction={ 'column' } align={ 'start' } margin={ '1rem 0' }>
          <Text size={ '2rem' }>Gastos</Text>
          <FlexContainer>
            <ExpenseIcon/>
            <Text size={ '1.8rem' }>{ expenses } { currency }</Text>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer width={ '100%' } direction={ 'column' } align={ 'start' } margin={ '1rem 0' }>
          <Text size={ '2rem' }>Ganhos</Text>
          <FlexContainer>
            <IncomeIcon/>
            <Text size={ '1.8rem' }>{ incomes } { currency }</Text>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer justify={ 'center' } padding={ '2rem 1rem' } width={ '100%' }>
        <NewExpenseButton onClick={ handleNewExpenseClick }>Nova transação</NewExpenseButton>
      </FlexContainer>
    </CardContainer>
  );
};
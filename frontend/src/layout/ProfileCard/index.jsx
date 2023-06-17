import {
  CardContainer,
  Avatar,
  SettingsIcon,
  ChangeCurrencyButton,
  OpenCurrenciesButton,
  LogoutButton,
  NewExpenseButton,
} from './styles.js';
import { FlexContainer } from '../../components/FlexContainer/index.jsx';
import { Text } from '../../components/Text/index.jsx';
import logo from '../../assets/logo.png';
import ReactCountryFlag from 'react-country-flag';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../features/authentication/context/index.jsx';
import { ExpensesContext } from '../../features/expenses/context/index.jsx';
import {ExpenseModal} from '../../features/expenses/components/Modal'

export const ProfileCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentUser, handleLogout } = useContext(AuthContext);
  const { totalExpenses, currencies } = useContext(ExpensesContext);
  const [total, setTotal] = useState(totalExpenses);
  const [currency, setCurrency] = useState('BRL');
  const [flag, setFlag] = useState('BR');
  const [isCurrenciesOpen, setIsCurrenciesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    

  const handleNewExpenseClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    setTotal(totalExpenses);
    if (currency === 'BRL') {
      setTotal(totalExpenses);
      setFlag('BR');
    } else if (currency === 'USD') {
      const usdCurrency = currencies.find((c) => c.code === 'USD')?.ask;
      setTotal((totalExpenses / usdCurrency).toFixed(2));
      setFlag('US');
    } else if (currency === 'EUR') {
      const eurCurrency = currencies.find((c) => c.code === 'EUR')?.ask;
      setTotal((totalExpenses / eurCurrency).toFixed(2));
      setFlag('EU');
    }
  }, [totalExpenses, currency]);

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
                       shadow={ '0 15px 30px rgba(0, 0, 0, 0.45)' } padding={ '1rem 2rem' } top={ '3rem'}
                       right={ '.5rem' } zIndex={'1'}>
          <Text type={ 'navlink' } to={ '/config' }>Configurações</Text>
          <Text type={ 'navlink' } to={ '/profile' }>Perfil</Text>
          <LogoutButton onClick={ handleLogoutClick } to={ '/authentication' }>Logout</LogoutButton>
        </FlexContainer>
      ) }
      <SettingsIcon onClick={ handleOpenMenu }/>

      <FlexContainer>
        <Avatar src={ currentUser?.picture || logo }/>
        <Text type={ 'span' } size={ '2rem' }>{ currentUser?.first_name }</Text>
      </FlexContainer>
      <FlexContainer direction={ 'column' } align={ 'start' }>
        <Text type={ 'span' } size={ '2rem' } weight={ '700' }>Gastos totais</Text>
        <FlexContainer width={ '100%' } position={ 'relative' }>
          <Text size={ '2rem' }>{ total }</Text>
          <Text size={ '2rem' }>{ currency }</Text>
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
            <FlexContainer direction={ 'column' } position={ 'absolute' } padding={ '1rem 2rem' } bgColor={ 'primary' }
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
      <FlexContainer justify={'center'} padding={'2rem'} width={'100%'}>
            <NewExpenseButton onClick={ handleNewExpenseClick }>New transaction</NewExpenseButton>
      </FlexContainer>
    </CardContainer>
  );
};
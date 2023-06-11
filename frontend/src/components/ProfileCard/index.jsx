import {
  CardContainer,
  Name,
  Avatar,
  TotalExpensesContainer,
  TotalExpenses,
  PersonContainer,
  SettingsIcon,
  CurrencyFlagContainer,
  TotalExpensesLabel,
  ChangeCurrencyButton,
  Currency,
  CurrenciesContainer,
  OpenCurrenciesButton,
  MenuContainer,
  MenuItem,
  LogoutButton,
} from './styles.js';
import logo from '../../assets/logo.png';
import ReactCountryFlag from 'react-country-flag';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../features/authentication/context/index.jsx';
import { ExpensesContext } from '../../features/expenses/context/index.jsx';
import { useNavigate } from 'react-router-dom';

export const ProfileCard = () => {
  const { currentUser, handleLogout } = useContext(AuthContext);
  const { totalExpenses, currencies } = useContext(ExpensesContext);
  const [total, setTotal] = useState(totalExpenses);
  const [currency, setCurrency] = useState('BRL');
  const [flag, setFlag] = useState('BR');
  const [isCurrenciesOpen, setIsCurrenciesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();


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
    navigate('/authentication');
  };

  return (
    <CardContainer>
      { isMenuOpen && (
        <MenuContainer>
          <MenuItem>Configurações</MenuItem>
          <MenuItem>Perfil</MenuItem>
          <LogoutButton onClick={ handleLogoutClick }>Logout</LogoutButton>
        </MenuContainer>
      ) }
      <SettingsIcon onClick={ handleOpenMenu }/>
      <PersonContainer>
        <Avatar src={ logo }/>
        <Name>{ currentUser?.first_name }</Name>
      </PersonContainer>
      <TotalExpensesContainer>
        <TotalExpensesLabel>Gastos totais</TotalExpensesLabel>
        <TotalExpenses>
          { total } { currency }
          <CurrencyFlagContainer>
            <ReactCountryFlag
              countryCode={ flag }
              svg
              style={ {
                width: '100%',
                height: '3rem',
                borderRadius: '50%',
              } }
            />
          </CurrencyFlagContainer>
          <OpenCurrenciesButton onClick={ handleOpenCurrencies } open={ isCurrenciesOpen ? 'opened' : '' }/>
          { isCurrenciesOpen && (
            <CurrenciesContainer>
              <ChangeCurrencyButton onClick={ () => handleCurrencyChange('BRL') }>
                <Currency>BRL</Currency>
              </ChangeCurrencyButton>
              <ChangeCurrencyButton onClick={ () => handleCurrencyChange('USD') }>
                <Currency>USD</Currency>
              </ChangeCurrencyButton>
              <ChangeCurrencyButton onClick={ () => handleCurrencyChange('EUR') }>
                <Currency>EUR</Currency>
              </ChangeCurrencyButton>
            </CurrenciesContainer>
          ) }
        </TotalExpenses>
      </TotalExpensesContainer>
    </CardContainer>
  );
};
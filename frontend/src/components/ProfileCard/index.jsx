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
} from './styles.js';
import logo from '../../assets/logo.png';
import ReactCountryFlag from 'react-country-flag';
import { useContext, useState } from 'react';
import { AuthContext } from '../../features/authentication/context/index.jsx';

export const ProfileCard = () => {
  const { currentUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const settings = () => {
    setOpen(!open);
  };

  return (
    <CardContainer>
      <SettingsIcon onClick={ settings }/>
      <PersonContainer>
        <Avatar src={ logo }/>
        <Name>{ currentUser?.first_name }</Name>
      </PersonContainer>
      <TotalExpensesContainer>
        <TotalExpensesLabel>Gastos totais</TotalExpensesLabel>
        <TotalExpenses>
          1464.30 BRL
          <CurrencyFlagContainer>
            <ReactCountryFlag
              countryCode="BR"
              svg
              style={ {
                width: '100%',
                height: '2.5rem',
                borderRadius: '50%',
              } }
            />
          </CurrencyFlagContainer>
        </TotalExpenses>
      </TotalExpensesContainer>
    </CardContainer>
  );
};
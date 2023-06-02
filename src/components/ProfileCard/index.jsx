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


export const ProfileCard = () => {
  return (
    <CardContainer>
      <SettingsIcon/>
      <PersonContainer>
        <Avatar src={ logo }/>
        <Name>John Doe</Name>
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
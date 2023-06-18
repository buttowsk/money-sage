import { FlexContainer } from '../FlexContainer/index.jsx';
import { Text } from '../Text/index.jsx';
import { HeaderContainer, Logo } from './styles.js';

export const Header = () => {
  return (
    <HeaderContainer>
      <FlexContainer gap={ '1rem' } bgColor={ 'transparent' }>
        <Logo/>
        <Text weight={ '700' }>Money Sage</Text>
      </FlexContainer>
    </HeaderContainer>
  );
};
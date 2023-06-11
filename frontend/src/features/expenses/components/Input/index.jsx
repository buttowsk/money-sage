import { StyledInput, InputContainer, Label, StyledSelect, StyledOption, Error } from './styles.js';


export const Input = ({ label, register, error, ...rest }) => {
  if (rest.options) {
    return (
      <InputContainer>
        <Label>{ label }</Label>
        <StyledSelect { ...register(rest.name) } { ...rest }>
          { rest.name === 'currency' ?
            rest.options.map((option) =>
              <StyledOption key={ option.code } value={ option.code }>{ option.code }</StyledOption>)
            : rest.options.map((option) =>
              <StyledOption key={ option } value={ option }>{ option }</StyledOption>) }
        </StyledSelect>
      </InputContainer>
    );
  } else {
    return (
      <InputContainer>
        <Label>{ label }</Label>
        <StyledInput { ...register(rest.name) } { ...rest } />
        { error && <Error>{ error }</Error> }
      </InputContainer>
    );
  }
};
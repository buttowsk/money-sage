import styled from 'styled-components';

export const Container = styled.div`
  width: ${ ({ width }) => width && width };
  max-width: ${ ({ maxWidth }) => maxWidth && maxWidth };
  height: ${ ({ height }) => height && height };
  max-height: ${ ({ maxHeight }) => maxHeight && maxHeight };
  display: flex;
  flex-direction: ${ ({ direction }) => direction ? direction : 'row' };
  justify-content: ${ ({ justify }) => justify && justify };
  align-items: ${ ({ align }) => align ? align : 'center' };
  gap: ${ ({ gap }) => gap ? gap : '1rem' };
  background-color: ${ ({ theme, bgColor }) => bgColor ? theme[bgColor] : theme.cardBackground };
  background: ${ ({ bg }) => bg && bg };
  color: ${ ({ theme }) => theme.text };
  overflow: ${ ({ overflow }) => overflow && overflow };
  border-radius: ${ ({ radius }) => radius ? radius : '1.2rem' };
  box-shadow: ${ ({ shadow }) => shadow && shadow };
  position: ${ ({ position }) => position && position };
  padding: ${ ({ padding }) => padding && padding };
  margin: ${ ({ margin }) => margin && margin };
  inset: ${ ({ inset }) => inset && inset };
  z-index: ${ ({ zIndex }) => zIndex && zIndex };
  top: ${ ({ top }) => top && top };
  left: ${ ({ left }) => left && left };
  right: ${ ({ right }) => right && right };
  bottom: ${ ({ bottom }) => bottom && bottom };
  backdrop-filter: ${ ({ backdrop }) => backdrop && backdrop };
`;

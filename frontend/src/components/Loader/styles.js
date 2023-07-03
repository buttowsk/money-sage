import styled, {keyframes} from 'styled-components';


const flip = keyframes`
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({theme}) => theme.background};
`;

export const LoaderSpan = styled.span`
  transform: translateZ(1px);
  
  &:before {
    content: '$';
    display: inline-block;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    text-align: center;
    line-height:40px;
    font-size: 32px;
    font-weight: bold;
    background: ${({theme}) => theme.primary};
    color: ${({theme}) => theme.accent};
    border: 4px double ;
    box-sizing: border-box;
    box-shadow:  2px 2px 2px 1px rgba(0, 0, 0, .1);
    animation: ${flip} 4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
`;
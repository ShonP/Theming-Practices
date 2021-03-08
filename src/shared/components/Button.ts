import styled from 'styled-components';

const Button = styled.button`
  color: ${({ theme }) => theme.application.textColor};
  background-color: ${({ theme }) => theme.application.background};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  cursor: pointer;
  font-weight: 400;
  line-height: 45px;
  margin: 0 0 2em;
  max-width: 160px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  border: 0 solid;
  box-shadow: inset 0 0 20px ${({ theme }) => theme.application.background};
  outline: 1px solid;
  outline-color: ${({ theme }) => theme.application.textColor};
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    border: 1px solid;
    box-shadow: inset 0 0 20px ${({ theme }) => theme.application.textColor},
      0 0 20px rgba(255, 255, 255, 0.2);
    outline-color: ${({ theme }) => theme.application.background};
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388;
  }
`;
export default Button;

import styled, { css } from "styled-components";

export default styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== 'error'
})`
  width: 100%;
  height: 52px;
  border: 2px solid #fff;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  outline: none;
  padding: 0 16px;
  font-size: 1rem;
  transition: border-color .3s ease-in;
  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;
  `}
`;
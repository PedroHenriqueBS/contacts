import styled from "styled-components";

export const Container = styled.div`
  margin-top: 32px;
  padding: 0 20px;
`;

export const InputSearchContainer = styled.div`
  width: 100%;
  
  input {
    width: 100%;
    height: 50px;
    background-color: #FFF;
    border: none;
    border-radius: 25px;
    box-shadow: 0px 4px 10px rgba( 0, 0, 0, 0.04);
    outline: none;
    padding: 0 16px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;

  strong {
    color: ${({ theme }) => theme.colors.gray[900]};
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all .3s ease-in;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;

  header {
    margin-bottom: 8px;

    button {
      background-color: transparent;
      border: none;
      display: flex;
      align-items: center;
      gap: 8px;

      span {
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primary.main};
      }
    }
  }
`;

export const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    margin-top: 16px;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .contact-name {
      display: flex;
      align-items: center;
      gap: 8px;

      small {
        background-color: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        padding: 2px 5px;
        border-radius: 4px;
        font-weight: bold;
      }
    }

    span {
      color: ${({ theme }) => theme.colors.gray[200]};
      font-size: 14px;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 5px;

    button {
      background: none;
      border: none;
    }
  }

`;
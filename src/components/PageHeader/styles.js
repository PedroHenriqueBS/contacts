import styled from "styled-components";

export const Container = styled.header`
  margin-bottom: 24px;
  padding: 0 20px;
  
  a {
    max-width: 100px;
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }

    img {
      transform: rotate(-90deg);
    }
  }

  h1 {
    margin-top: 5px;
    font-size: 24px;
  }
`;
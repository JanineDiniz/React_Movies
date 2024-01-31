import styled from "styled-components";

export const Container = styled.div`
  >a{
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.colors.pink};
    gap: 8px;
    font-size: 20px;
  }
`;
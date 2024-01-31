import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  border-radius: 10px;
  margin-bottom: 8px;
  padding: 0 12px;

  background-color: ${({theme}) => theme.colors.gray_input};

  >input{
    width: 100%;
    height: 56px;

    color: ${({theme}) => theme.colors.gray_100};
    background-color: transparent;
    border: 0;
    padding-left: 20px;

    &:placeholder{
      color: ${({theme}) => theme.colors.gray_200};
    }
  }
`;
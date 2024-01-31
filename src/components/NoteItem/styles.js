import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: max-content;

  background-color: ${({theme, isNew}) => isNew ? "transparent" :  theme.colors.gray_input};
  color: ${({theme}) => theme.colors.gray_100};

  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.colors.gray_100}` : "none" };

  border-radius:10px;
  padding-right:16px;

  >button{
    border: none;
    background: none;
    color: ${({theme}) => theme.colors.pink};
  }

  >input{
    height:56px;
    width:100%;
    padding: 12px;

    color: ${({theme}) => theme.colors.gray_100};
    background:transparent;

    border:none;
    &::placeholder{
      color: ${({theme}) => theme.colors.gray_200};
    }
  }
`;
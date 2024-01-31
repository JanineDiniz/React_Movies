import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  background-color: ${({theme}) => theme.colors.gray_input};
  color: ${({theme}) => theme.colors.gray_100};

  border: none;
  resize: none;
  margin-bottom: 8px;
  border-radius: 10px;
  padding: 30px;

  &::placeholder{
    color: ${({theme}) => theme.colors.gray_200};
  }
`;
import styled from "styled-components";

export const Container =styled.button`
  width: 100%;
  height: 56px;

  background-color: ${({theme}) => theme.colors.pink};
  color: ${({theme}) => theme.colors.gray_300};

  border: none;
  border-radius: 10px;
  font-weight: 500;

  margin-top: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
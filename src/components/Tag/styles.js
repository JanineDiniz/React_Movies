import styled from "styled-components";

export const Container = styled.span`
  font-size: 12px;
  border-radius: 5px;
  padding: 5px 14px;
  margin-left: 6px;

  color: ${({theme}) => theme.colors.gray_200};
  background-color: ${({theme}) => theme.colors.gray_300};
`;
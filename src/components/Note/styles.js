import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({theme}) => theme.colors.pink_5};
  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;
  

  >h1{
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({theme}) => theme.colors.gray_100};
  }
  >div{
    display: flex;
    gap: 6px;
    margin: 8px 0 15px;
    svg{
      color: ${({theme}) => theme.colors.pink};
      fill: ${({theme}) => theme.colors.pink};
    }
  }
  >p{
    text-align: justify;
    color: ${({theme}) => theme.colors.gray_200};
  }
  >footer{
    width: 100%;
    display: flex;
    margin-top: 24px;
    gap: 8px;
    flex-wrap: wrap;
  }
`;
import styled from "styled-components";
import backgroundImg from '../../assets/backgroundImg.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 134px;


  >h1{
    color: ${({theme}) => theme.colors.pink};
    font-size: 48px;

  }
  >p{
    font-size: 14px;
    margin-bottom: 48px;
    color: ${({theme}) => theme.colors.gray_200};
  }
  >h2{
    font-size: 24px;
    margin-bottom: 48px;
  }
  svg{
    color: ${({theme}) => theme.colors.gray_200};
  }
  a{
    margin-top: 42px;
    color: ${({theme}) => theme.colors.pink};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    svg{
      color: ${({theme}) => theme.colors.pink};
    }
  }
`;

export const Background = styled.div`
  /* background-color: red; */
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: .5;
`;
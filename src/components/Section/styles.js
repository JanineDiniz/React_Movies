import styled from "styled-components";

export const Container = styled.section`
  margin: 50px 0;
  >div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    >h2{
      color: ${({theme}) => theme.colors.gray_100};
      font-weight: 400;
      font-size: 32px;
      width: max-content;
  
    }
    >button{
      width: 207px;
      height: 56px;
  
      background-color: ${({theme}) => theme.colors.pink};
      color: ${({theme}) => theme.colors.gray_300};
  
      border: none;
      border-radius: 10px;
      font-weight: 500;
  
      margin-top: 16px;
      
      svg{
        font-size: 20px;
      }
  }
  }
  .button-hidden{
    display: none;
  }
  .button-show{
    display: block;
  }
`;
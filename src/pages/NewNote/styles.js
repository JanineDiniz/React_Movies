import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  "header"
  "content"
  ;
  >main{
    grid-area: content;
    overflow-y: auto;
  }
  .tags{
    width: 100%;
    display: flex;
    gap: 24px;
    flex-wrap: wrap;

    padding: 16px;
    background-color: ${({theme}) => theme.colors.gray_400};
    border-radius: 10px;
  }
`;

export const Form = styled.form`
  max-width: 1137px;
  margin: 40px auto;

  >header{
    margin-bottom: 40px;
    h1{
      margin-top: 24px;
    }
  }
  .input_text, .buttons{
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
  }

  .delete{
    background-color: ${({theme}) => theme.colors.gray_400};
    color: ${({theme}) => theme.colors.pink};
  }
`;
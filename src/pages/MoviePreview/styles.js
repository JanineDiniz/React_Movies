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
`;

export const Details = styled.div`
  width: 1137px;
  margin: 40px auto;
  >p{
    margin-top: 40px;
  }
`;
export const MovieRate = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 24px 0;

`;
export const NoteData = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
  .user, .timestamp{
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .user{
    height: 16px;
    >img{
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }
  }
`;
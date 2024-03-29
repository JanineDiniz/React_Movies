import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  /* grid-template-columns: 250px auto; */
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "newnote"
  "content"
  ;
  background-color: ${({theme}) => theme.colors.background}; 
`

export const Content = styled.div`
  grid-area: content;
  padding: 0 123px;
  overflow-y: auto;


`;

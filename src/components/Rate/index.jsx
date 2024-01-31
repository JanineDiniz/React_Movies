import { Container } from "./styles";
import {FiStar} from 'react-icons/fi'

export function Rate(){
  return(
  <Container >
    <FiStar></FiStar>
    <FiStar></FiStar>
    <FiStar></FiStar>
    <FiStar></FiStar>
    <FiStar></FiStar>
  </Container>
  )
}

// export function Rate(isFull){
//   <Container  isFull={isFull}>
//     <FiStar className={isFull ? 'star-full' : 'star-empty'}></FiStar>
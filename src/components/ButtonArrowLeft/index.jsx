import { Container } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

export function ButtonArrowLeft(){
  return(
    <Container>
      <a href="#">
        <FiArrowLeft></FiArrowLeft>
        Voltar
      </a>
    </Container>

  )
}
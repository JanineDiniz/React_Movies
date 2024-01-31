import { Container } from "./styles";
import {FiPlus} from 'react-icons/fi'

export function Section({title, show, children}){
  return(
    <Container show={show}>
      <div>
        <h2>{title}</h2>
        <button className={show ? 'button-show' : 'button-hidden' }><FiPlus></FiPlus>
        Adicionar Filme</button>
      </div>
      {children}
    </Container>
  )
}
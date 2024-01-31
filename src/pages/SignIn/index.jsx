import { Container, Form, Background } from "./styles";
import { FiMail, FiLock} from 'react-icons/fi'
import {Input} from '../../components/Input'
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SignIn(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input type="text" placeholder="E-mail" icon={FiMail}></Input>
        <Input type="password" placeholder="Senha" icon={FiLock}></Input>

        <Button title="Entrar"></Button>

        <Link to="/signup">Criar conta</Link>
      </Form>
      <Background></Background>
    </Container>
  )
}
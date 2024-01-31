import { Container, Form, Background } from "./styles";
import { FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi'
import {Input} from '../../components/Input'
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SignUp(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input type="text" placeholder="Nome" icon={FiUser}></Input>
        <Input type="text" placeholder="E-mail" icon={FiMail}></Input>
        <Input type="password" placeholder="Senha" icon={FiLock}></Input>

        <Button title="Cadastrar"></Button>

        <Link to="/">
          <FiArrowLeft></FiArrowLeft>
          Voltar para o login
        </Link>
      </Form>
      <Background></Background>
    </Container>
  )
}
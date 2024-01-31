import {Container, Brand, Profile} from './styles'
import {Input} from '../../components/Input'


export function Header(){
  return(
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>
      <Input placeholder="Pesquisar pelo Título"></Input>
      <Profile to="/profile">
        <div>
          <strong>Janine Diniz</strong>
          <span>Sair</span>
        </div>
        <img src="https://github.com/JanineDiniz.png" alt="Foto do Usuário"/>
      </Profile>
    </Container>
  )
}
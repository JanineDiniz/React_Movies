import { Container, Details, MovieRate, NoteData } from "./styles";
import {Header} from '../../components/Header'
import {ButtonArrowLeft} from '../../components/ButtonArrowLeft'
import {Tag} from '../../components/Tag'
import {Note} from '../../components/Note'
import {FiStar, FiClock} from 'react-icons/fi'
import { Link } from "react-router-dom";
import { Rate } from "../../components/Rate";

export function MoviePreview(){
  return(
    <Container>
      <Header></Header>
      <main>
        <Details>
          <header>
            <Link to="/">
              <ButtonArrowLeft></ButtonArrowLeft>
            </Link>
          </header>

          <MovieRate>
            <h1>Interestellar</h1>
            <Rate></Rate>
          </MovieRate>

          <NoteData>
            <div className="user">
              <img src="https://github.com/JanineDiniz.png" alt="Imagem do Usuário" />
              <span>Por Janine Diniz</span>
            </div>
            <div className="timestamp">
              <FiClock></FiClock>
              <span>23/05/23 às 20:00</span>
            </div>
          </NoteData>
          <Tag title="Ficção Científica"></Tag>
          <Tag title="Drama"></Tag>
          <Tag title="Família"></Tag>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia neque maxime minima doloremque quod maiores voluptas mollitia ducimus nostrum optio, porro aperiam dignissimos commodi minus reprehenderit cumque distinctio eum deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia neque maxime minima doloremque quod maiores voluptas mollitia ducimus nostrum optio, porro aperiam dignissimos commodi minus reprehenderit cumque distinctio eum deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia neque maxime minima doloremque quod maiores voluptas mollitia ducimus nostrum optio, porro aperiam dignissimos commodi minus reprehenderit cumque distinctio eum deserunt.</p>
        </Details>
        
      </main>
    </Container>
  )
}
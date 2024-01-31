import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {Textarea} from '../../components/Textarea'
import {Section} from '../../components/Section'
import {Button} from '../../components/Button'
import {NoteItem} from '../../components/NoteItem'
import {ButtonArrowLeft} from '../../components/ButtonArrowLeft'
import {FiArrowLeft} from 'react-icons/fi'
import { Link } from "react-router-dom";

export function NewNote(){
  return(
    <Container>
      <Header></Header>
      <main>
        <Form>
          <header>
            <Link to="/">
              <ButtonArrowLeft></ButtonArrowLeft>
            </Link>
            <h1>Criar Nota</h1>
          </header>

          <div className="input_text">
            <Input placeholder="Título"></Input>
            <Input placeholder="Sua nota(0 a 5)"></Input>
          </div>

          <Textarea placeholder="Observações"></Textarea>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="Romance"></NoteItem>
              <NoteItem isNew placeholder="Novo Marcador"></NoteItem>
            </div>
          </Section>

          <div className="buttons">
            <Button title="Excluir filme" className="delete"></Button>
            <Button title="Salvar Alterações"></Button>
          </div>
        </Form>
      </main>
    </Container>

  )
}
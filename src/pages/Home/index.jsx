import { Container, Content } from "./styles"
import {Header} from '../../components/Header'
import {Note} from '../../components/Note'
import {Section} from '../../components/Section'
import {Button} from '../../components/Button'
import { FiPlus } from "react-icons/fi"
import { Link } from "react-router-dom";

export function Home(){
  return(
    <Container>
      <Header>
      </Header>

      <Content>
        <Section title="Meus filmes" show>
          <Note data={{
            title: 'Interestellar',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quibusdam quas molestiae ullam quos, culpa temporibus esse facere numquam amet officiis rerum doloremque itaque praesentium earum cumque. Deserunt, error nemo',
            tags:[
              {id:'1', name: 'Ficção Científica'}, 
              {id:'2', name:'Drama'},
              {id:'3', name:'Família'}
            ]
          }}></Note>
          <Note data={{
            title: 'Interestellar',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quibusdam quas molestiae ullam quos, culpa temporibus esse facere numquam amet officiis rerum doloremque itaque praesentium earum cumque. Deserunt, error nemo',
            tags:[
              {id:'1', name: 'Ficção Científica'}, 
              {id:'2', name:'Drama'},
              {id:'3', name:'Família'}
            ]
          }}></Note>
          <Note data={{
            title: 'Interestellar',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quibusdam quas molestiae ullam quos, culpa temporibus esse facere numquam amet officiis rerum doloremque itaque praesentium earum cumque. Deserunt, error nemo',
            tags:[
              {id:'1', name: 'Ficção Científica'}, 
              {id:'2', name:'Drama'},
              {id:'3', name:'Família'}
            ]
          }}></Note>
        </Section>

      </Content>
    </Container>
  )
}

// botão
// seção
// input
// note
// tag

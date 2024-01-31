import { Tag } from "../Tag";
import {Rate} from '../Rate'
import { Container } from "./styles";
import {FiStar} from 'react-icons/fi'

export function Note({data, ...rest}){
  return(
    <Container {...rest} to="/details/:id">
      <h1>{data.title}</h1>
      <Rate/>
      <p>{data.text}</p>
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name}></Tag>)
          }
        </footer>
      }
      {/* {
        data.stars &&
        <div>
          {
            data.stars.map(star => <FiStar fill=""></FiStar>) 
          }
        </div>
      } */}
    </Container>
  )
}
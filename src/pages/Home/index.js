import { Container, Header, ListContainer, Card, InputSearchContainer } from "./styles"

import Arrow from '../../assets/images/icons/arrow.svg';
import Trash from '../../assets/images/icons/trash.svg';
import Edit from '../../assets/images/icons/edit.svg';

export default function Home(){
  return(
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..."/>
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={Arrow} alt="arrow button" width={8}/>
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Pedro Henrique</strong>
              <small>Instagram</small>
            </div>  
            <span>pedro@gmail.com</span>
            <span>(51) 998421305</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={Edit} alt="editar"/>
            </a>
            <button type="button">
              <img src={Trash} alt="excluir"/>
            </button>
          </div>
        </Card>
      </ListContainer>

      
    </Container>
  )
}
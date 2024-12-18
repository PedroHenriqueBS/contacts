import { Container, InputSearchContainer } from "./styles";
import Logo from '../../assets/images/logo.svg'

export default function Header(){
  return (
    <Container>
      <img src={Logo} alt="Logo do projeto" width="201"/>

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..."/>
      </InputSearchContainer>
    </Container>
  )
}
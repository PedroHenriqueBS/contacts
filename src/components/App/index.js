import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import { Container } from './styles';
import Header from '../Header';
import Routes from '../../Routes';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

          <Container>
            <Header />
            <Routes />
          </Container>
          
      </ThemeProvider>
    </BrowserRouter>
  );
}

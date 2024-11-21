import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#7c4dff',
    },
    background: {
      default: '#000051',
      paper: '#1a237e',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <div id="inicio">
          <Hero />
        </div>
        <div id="proyectos">
          <Projects />
        </div>
        <div id="habilidades">
          <Skills />
        </div>
        <div id="contacto">
          <Contact />
        </div>
      </main>
    </ThemeProvider>
  );
};
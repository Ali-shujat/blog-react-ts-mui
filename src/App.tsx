import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import Posts from './Components/Posts';
import { theme } from './shared/myTheme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <div className="App">

        <Posts></Posts>

      </div>
    </ThemeProvider>
  );
}

export default App;

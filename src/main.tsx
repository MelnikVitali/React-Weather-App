import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto';
import StoreProvider from './store/StoreProvider';
import ThemeProviderWrapper from './theme/ThemeProvider';
import App from './components/App/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider>
    <ThemeProviderWrapper>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </ThemeProviderWrapper>
  </StoreProvider>,
);

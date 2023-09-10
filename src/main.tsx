import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto';
import { ThemeProvider } from '@mui/material/styles';
import { themeWeather } from '@/theme/themeWeather';
import { Provider } from 'react-redux';
import App from './components/App';
import { setupStore } from './store';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ThemeProvider theme={themeWeather}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
);

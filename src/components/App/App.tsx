import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import CityWeatherPage from '../../pages/CityWeatherPage/CityWeatherPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import Footer from '../Footer';
import { Container } from '@mui/material';
import { styles } from './styles';

function App() {
  return (
    <Container maxWidth='xl' sx={styles.container}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cities/:cityName' element={<CityWeatherPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;

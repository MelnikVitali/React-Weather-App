import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import HomePage from '@/pages/HomePage';
import CityWeatherPage from '@/pages/CityWeatherPage';
import NotFoundPage from '@/pages/NotFoundPage';
import Footer from '@/components/Footer';
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

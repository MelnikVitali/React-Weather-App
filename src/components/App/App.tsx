import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import CityWeatherPage from '../../pages/CityWeatherPage/CityWeatherPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import Footer from '../Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cities/:cityName' element={<CityWeatherPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

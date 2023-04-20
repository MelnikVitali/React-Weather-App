import { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import CityCard from '../CityCard/CityCard';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getLocalStorageCities } from '../../helpers/localStorage';
import { getSavedCityNames } from '../../store/slices/weatherCitySlice';
import { styles } from './styles';

const CitiesList: FC = () => {
  const dispatch = useAppDispatch();

  const savedCities = useAppSelector((state) => state.citiesWeather.savedCitiesNames);

  useEffect(() => {
    const localStorageCities = getLocalStorageCities();

    if (localStorageCities) {
      dispatch(getSavedCityNames(localStorageCities));
    }
  }, []);

  return (
    <Grid container spacing={4} sx={styles.container}>
      {savedCities.length > 0 &&
        savedCities.map((name, index) => (
          <Grid item key={name + index}>
            <CityCard cityName={name} />
          </Grid>
        ))}
    </Grid>
  );
};

export default CitiesList;

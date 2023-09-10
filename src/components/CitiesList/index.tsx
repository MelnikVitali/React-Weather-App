import { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import { getSavedCities } from '@/store/selectors';
import CityCard from '@/components/CityCard';
import { getSavedCityNames } from '@/store/slices/weatherCitySlice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getLocalStorageCities } from '@/helpers/localStorage';
import { styles } from './styles';

const CitiesList: FC = () => {
  const dispatch = useAppDispatch();

  const savedCities = useAppSelector(getSavedCities);

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

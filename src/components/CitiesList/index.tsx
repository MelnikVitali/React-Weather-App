import { FC, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
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
    <Box>
      <Typography variant='h5' m={'36px 0 0 55px'}>
        Saved cities:
      </Typography>
      {savedCities.length > 0 ? (
        <Grid container spacing={4} sx={styles.container}>
          {savedCities.map((name, index) => (
            <Grid item key={name + index}>
              <CityCard cityName={name} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography color={'gray'} ml='55px'>
          No saved cities. To add the city, you need to find it.
        </Typography>
      )}
    </Box>
  );
};

export default CitiesList;

import { useState } from 'react';
import { Box, Button, CircularProgress, Container, Grid, InputBase, Paper } from '@mui/material';
import { useAppDispatch } from '@/hooks/redux';
import { addCity } from '@/store/slices/weatherCitySlice';
import { useGetCityMutation } from '@/store/services/weather/cityWeatherApi';
import { addToLocalStorage } from '@/helpers/localStorage';
import CitiesList from '@/components/CitiesList';
import Header from '@/components/Header';
import { styles } from './styles';

export const HomePage = () => {
  const [cityName, setCityName] = useState<string>('');
  const [emptySearchInput, setEmptySearchInput] = useState<boolean>(false);

  const [getCityWeather, { error, isLoading }] = useGetCityMutation();

  const dispatch = useAppDispatch();

  const searchHandler = (e: any) => {
    setCityName(e.target.value);

    setEmptySearchInput(false);
  };

  const addCityHandler = async () => {
    if (!cityName) {
      setEmptySearchInput(true);
      return false;
    }
    setEmptySearchInput(false);

    const { data }: any = await getCityWeather(cityName.trim().toLowerCase());

    if (data) {
      dispatch(addCity(data.name));
      addToLocalStorage(data.name);
      setCityName('');
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Grid container sx={styles.container}>
          <Paper sx={styles.formWrapper} elevation={4}>
            {isLoading ? (
              <Box sx={styles.circularProgress}>
                <CircularProgress />
              </Box>
            ) : null}
            {(error || emptySearchInput) && (
              <Box sx={styles.errorText}>
                {error ? 'City not found' : 'Please enter a city to search'}
              </Box>
            )}
            <InputBase
              sx={styles.inputSearcher}
              data-testid='input-search-by-city'
              placeholder='Search city...'
              autoComplete='off'
              value={cityName}
              onChange={searchHandler}
              autoFocus
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  addCityHandler();
                }
              }}
            />
            <Button
              disabled={emptySearchInput}
              variant='contained'
              type='submit'
              onClick={addCityHandler}
            >
              SEARCH
            </Button>
          </Paper>
        </Grid>

        <Grid container spacing={2}>
          <CitiesList />
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;

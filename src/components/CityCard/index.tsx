import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import ClearIcon from '@mui/icons-material/Clear';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { temperatureFormat } from '@/helpers/temperatureFormat';
import { removeSavedCity } from '@/store/slices/weatherCitySlice';
import { removeLocalStorage } from '@/helpers/localStorage';
import { useAppDispatch } from '@/hooks/redux';
import { useGetCityWeatherQuery } from '@/store/services/weather/cityWeatherApi';
import { styles } from './styles';

interface CitiesCardProps {
  cityName: string;
}
const CityCard: FC<CitiesCardProps> = ({ cityName }) => {
  const cityPageUrl = `/cities/${cityName}`;

  const { data, error, isLoading, refetch } = useGetCityWeatherQuery(cityName);

  const dispatch = useAppDispatch();

  const updateCityWeather = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    refetch();
  };

  const deleteSavedCity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    dispatch(removeSavedCity(cityName));
    removeLocalStorage(cityName);
  };

  return (
    <>
      {isLoading ? (
        <Box sx={styles.circularProgress}>
          <CircularProgress />
        </Box>
      ) : null}
      {data && !isLoading && (
        <Card variant='outlined' sx={styles.card}>
          <Box sx={styles.header}>
            <CardMedia
              component='img'
              sx={styles.iconWeather}
              image={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
              alt={data?.weather[0]?.icon}
            />
            <Typography variant='h4' sx={styles.temperature}>
              <Typography component='span' color={'gray'} sx={{}}>
                {data?.updatedDate}
              </Typography>
              {temperatureFormat(data?.main?.temp)}
            </Typography>
          </Box>

          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography variant='h4' gutterBottom>
              <Tooltip title={`${data.name}, ${data?.sys?.country}`} placement='top-start'>
                <Box sx={styles.boxCardContent}>
                  <Typography variant='h4'>{data?.name}</Typography>
                  <Typography variant='h5'>({data?.sys?.country})</Typography>
                  {error ? <Typography variant='h6'>oh no, there was an error</Typography> : null}
                </Box>
              </Tooltip>{' '}
            </Typography>
            <Typography variant='h6' gutterBottom>
              Feels like {temperatureFormat(data?.main?.feels_like)}
            </Typography>
            <Typography variant='h6' gutterBottom>
              {data?.weather[0]?.description.charAt(0).toUpperCase() +
                data?.weather[0]?.description.slice(1)}
            </Typography>
            <Typography variant='h6' gutterBottom>
              Wind speed: {data?.wind?.speed} m/s
            </Typography>
            <Typography variant='h6'>Humidity: {data?.main?.humidity}%</Typography>
          </CardContent>
          <CardActions sx={styles.cardActions}>
            <Tooltip title='Update' arrow>
              <IconButton color='primary' onClick={updateCityWeather} data-testid='update-card'>
                <UpdateIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title='Details' arrow>
              <NavLink to={cityPageUrl} data-testid='details-card'>
                <IconButton color='secondary'>
                  <ReadMoreIcon />
                </IconButton>
              </NavLink>
            </Tooltip>
            <Tooltip title='Delete' arrow>
              <IconButton onClick={deleteSavedCity} data-testid='close-card'>
                <ClearIcon />
              </IconButton>
            </Tooltip>
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default CityCard;

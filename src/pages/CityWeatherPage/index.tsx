import { FC } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { DateTime } from 'luxon';
import {
  Typography,
  Box,
  Tooltip,
  IconButton,
  Button,
  Paper,
  CircularProgress,
} from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { temperatureFormat } from '../../helpers/temperatureFormat';
import HourlyForecast from '../../components/HourlyForecast';
import { useGetHourlyForecastQuery } from '../../store/services/weather/cityWeatherApi';
import { styles } from './styles';

const CityWeatherPage: FC = () => {
  const { cityName } = useParams();

  const { data, error, isLoading, refetch } = useGetHourlyForecastQuery(cityName);

  const currentTemp = temperatureFormat(data?.main?.temp);
  const minTemp = temperatureFormat(data?.main?.temp_min);
  const maxTemp = temperatureFormat(data?.main?.temp_max);
  const feelsLikeTemp = temperatureFormat(data?.main?.feels_like);
  const sunriseTime = DateTime.fromSeconds(Number(data?.sys?.sunrise)).toFormat('HH:mm');
  const sunsetTime = DateTime.fromSeconds(Number(data?.sys?.sunset)).toFormat('HH:mm');

  const updateCityWeather = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    refetch();
  };

  return (
    <>
      {isLoading ? (
        <Box sx={styles.circularProgress}>
          <CircularProgress />
        </Box>
      ) : null}

      <Box sx={styles.container}>
        <Box sx={styles.header}>
          <Typography variant='h3' sx={!error ? styles.title : styles.titleError}>
            {/* @ts-ignore */}
            Weather in <span>{!error ? data?.name : error?.data?.message}</span>,{' '}
            {data?.sys?.country}
          </Typography>
          <Box sx={styles.timeAndUpdateBox}>
            <Typography variant='h6' color='primary'>
              {data?.updatedDate}
            </Typography>
            <Tooltip title='Update' placement='bottom' arrow>
              <IconButton color='primary' onClick={updateCityWeather}>
                <UpdateIcon sx={styles.updateIcon} />
              </IconButton>
            </Tooltip>
            <NavLink to='/'>
              <Button variant='contained' startIcon={<ChevronLeftIcon />} sx={styles.buttonBack}>
                BACK TO HOME PAGE
              </Button>
            </NavLink>
          </Box>
        </Box>
        {data && (
          <>
            <Paper elevation={3} sx={styles.contentBox}>
              <Box sx={{ width: '33%', paddingLeft: '40px' }}>
                <Box sx={styles.currentTemp}>
                  <Typography fontSize={21}>Current Temp:</Typography>
                  <Typography fontSize={24}>{currentTemp}</Typography>
                </Box>
                <Typography fontSize={20} mb='15px'>
                  Feels like: {feelsLikeTemp}
                </Typography>
                <Typography fontSize={20} mt='15px'>
                  Min Temp: {minTemp}
                </Typography>
                <Typography fontSize={20} mb='15px'>
                  Max Temp: {maxTemp}
                </Typography>
              </Box>

              <Box sx={{ width: '33%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: '-18px' }}>
                  <img
                    src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
                    alt={data?.weather[0]?.description}
                  />
                  <Typography fontSize={20} sx={{ textTransform: 'capitalize' }}>
                    {data?.weather[0]?.description}
                  </Typography>
                </Box>
                <Typography fontSize={20} pl={4}>
                  Sunrise: {sunriseTime}
                </Typography>
                <Typography fontSize={20} pl={4}>
                  Sunset: {sunsetTime}
                </Typography>
              </Box>

              <Box sx={{ width: '33%', ...styles.lastBox }}>
                <Typography fontSize={20} mt='10px'>
                  Humidity: {data?.main?.humidity}%
                </Typography>
                <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                  <Typography fontSize={20}>Pressure: {data?.main?.pressure} hPa</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                  <Typography fontSize={20}>Wind Speed: {data?.wind?.speed} m/s</Typography>
                </Box>
              </Box>
            </Paper>

            <HourlyForecast dataList={data.list} />
          </>
        )}
      </Box>
    </>
  );
};

export default CityWeatherPage;

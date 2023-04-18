import { FC } from 'react';
import { NavLink, useParams } from 'react-router-dom';
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
import moment from 'moment';
import { temperatureFormat } from '../../helpers/temperatureFormat';
import HourlyForecast from '../../components/HourlyForecast/HourlyForecast';
import { styles } from './styles';
import { useGetCityWeatherQuery } from '../../store/services/weather/cityWeatherApi';

const CityWeatherPage: FC = () => {
  const { cityName } = useParams();

  const { data, isLoading, refetch }: any = useGetCityWeatherQuery(cityName);

  if (!data) return null;

  const updatedDate = moment().format('MMMM DD,  HH:mm:ss');
  const currentTemp = temperatureFormat(data?.main?.temp);
  const minTemp = temperatureFormat(data?.main?.temp_min);
  const maxTemp = temperatureFormat(data?.main?.temp_max);
  const feelsLikeTemp = temperatureFormat(data?.main?.feels_like);
  const sunriseTime = moment.unix(data?.sys?.sunrise).format('HH:mm');
  const sunsiteTime = moment.unix(data?.sys?.sunset).format('HH:mm');

  const updateCityWeather = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    refetch();
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography variant='h3' sx={{ span: { color: '#1769aa' }, mb: 4 }}>
          Weather in <span>{data?.name}</span>, {data?.sys?.country}
        </Typography>
        <Box sx={styles.timeAndUpdateBox}>
          <Typography variant='h6' color='primary'>
            {updatedDate}
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

      {isLoading ? (
        <Box sx={styles.circularProgress}>
          <CircularProgress />
        </Box>
      ) : null}

      <Paper elevation={3} sx={styles.contentBox}>
        <Box sx={{ width: '35%', paddingLeft: '40px' }}>
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

        <Box sx={{ width: '40%' }}>
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
            Sunset: {sunsiteTime}
          </Typography>
        </Box>
        <Box
          sx={{
            width: '20%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            paddingBottom: '14px',
          }}
        >
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

      <HourlyForecast cityId={data.id} cityName={cityName} />
    </Box>
  );
};

export default CityWeatherPage;

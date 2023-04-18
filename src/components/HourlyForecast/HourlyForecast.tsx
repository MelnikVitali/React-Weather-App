import { FC, useEffect } from 'react';
import {
  Typography,
  Box,
  CircularProgress,
  Paper,
  Tooltip,
  IconButton,
  Button,
} from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import moment from 'moment';
import TempCard from './HourTempCard';
import {
  useGetCityWeatherQuery,
  useGetHourlyForecastQuery,
} from '../../store/services/weather/cityWeatherApi';
import { styles } from './styles';
import { NavLink } from 'react-router-dom';

interface HourlyForecastProps {
  cityId: number;
  cityName?: string;
}

const HourlyForecast: FC<HourlyForecastProps> = ({ cityId, cityName }) => {
  const { data, isLoading, refetch }: any = useGetHourlyForecastQuery(cityId);
  const { refetch: refetchCity } = useGetCityWeatherQuery(cityName);

  const updatedDate = moment().format('MMMM DD,  HH:mm:ss');

  const updateCityWeather = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    refetch();
  };

  useEffect(() => {
    refetch();
    refetchCity();
  }, []);

  return (
    <Box sx={styles.hourlyForecast}>
      <Typography
        sx={{ span: { color: '#1769aa' }, margin: '50px 0 20px' }}
        variant='h4'
        textAlign='center'
      >
        Hourly Forecast in <span>{data?.city?.name}</span>, {data?.city?.country}
      </Typography>

      {isLoading ? (
        <Box sx={styles.circularProgress}>
          <CircularProgress />
        </Box>
      ) : null}

      <Box sx={styles.header}>
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

      <Paper elevation={3} sx={{ display: 'flex' }}>
        {data &&
          data.list
            .filter((el: any, index: number) => index < 9)
            .map((hourTemp: any, index: number) => {
              return <TempCard key={index} hourTemp={hourTemp} />;
            })}
      </Paper>

      <Box sx={styles.zeroDegrees}>0°C</Box>
    </Box>
  );
};

export default HourlyForecast;

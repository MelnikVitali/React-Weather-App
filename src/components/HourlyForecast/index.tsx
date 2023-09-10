import { FC } from 'react';
import { Typography, Box, Paper } from '@mui/material';
import TempCard from './HourTempCard';
import { IHourlyForecast } from '@/interfaces/IHourlyForecast';
import { styles } from './styles';

interface HourlyForecastProps {
  dataList: IHourlyForecast[];
}

const HourlyForecast: FC<HourlyForecastProps> = ({ dataList }) => {
  return (
    <Box sx={styles.hourlyForecast}>
      <Typography sx={styles.titleHourly} variant='h4'>
        Hourly Forecast
      </Typography>
      <Paper elevation={3} sx={{ display: 'flex' }}>
        {dataList &&
          dataList
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

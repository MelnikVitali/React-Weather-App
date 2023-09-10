import { FC } from 'react';
import { DateTime } from 'luxon';
import { Box, Paper } from '@mui/material';
import { temperatureFormat } from '@/helpers/temperatureFormat';
import { IHourlyForecastList } from '@/interfaces/IHourlyForecast';
import { styles } from './styles';

interface HourTempCardProps {
  key: number;
  hourTemp: IHourlyForecastList;
}

const HourTempCard: FC<HourTempCardProps> = ({ hourTemp }) => {
  const time = DateTime.fromFormat(hourTemp?.dt_txt, 'yyyy-MM-dd HH:mm:ss').toFormat('HH:mm');
  const temp = temperatureFormat(hourTemp.main.temp);

  const cardMargin = () => {
    const temp = Math.round(hourTemp.main.temp);
    return +temp * 3;
  };

  const margin = cardMargin();

  return (
    <Box sx={styles.hourTempCardStyle}>
      <Box mt='7px'>{time}</Box>
      <Box mt='-20px'>
        <img
          src={`http://openweathermap.org/img/wn/${hourTemp.weather[0].icon}@2x.png`}
          alt={hourTemp.weather[0].description}
        />
      </Box>

      <Paper sx={{ ...styles.hourTempCardPaper, marginBottom: `${margin}px` }}>{temp}</Paper>
    </Box>
  );
};

export default HourTempCard;

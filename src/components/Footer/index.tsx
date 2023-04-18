import { FC } from 'react';
import { Box, Link, Typography } from '@mui/material';
import { styles } from './styles';

const Footer: FC = () => {
  return (
    <>
      <Box sx={styles.footerContainer} component='footer'>
        <Typography variant='h6' align='center' gutterBottom>
          Weather App
        </Typography>
        <Typography variant='subtitle1' align='center' color='text.secondary' component='p'>
          Powered by React, Redux Toolkit, RTK Query, Material UI and OpenWeatherMap
        </Typography>
        <Typography variant='body2' color='text.secondary' align='center'>
          {'Copyright © '}
          <Link color='inherit' href='https://github.com/teetajp/weather-app'>
            Vitalii Melnik
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </>
  );
};

export default Footer;

import { FC } from 'react';
import { Typography, Box, Button } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { NavLink } from 'react-router-dom';
import { styles } from './styles';

const NotFoundPage: FC = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.box}>
        <Typography variant='h4'>Oops! Page not found... 😐</Typography>
        <NavLink to='/'>
          <Button variant='contained' startIcon={<ChevronLeftIcon />} sx={styles.buttonBack}>
            BACK TO HOME PAGE
          </Button>
        </NavLink>
      </Box>
    </Box>
  );
};

export default NotFoundPage;

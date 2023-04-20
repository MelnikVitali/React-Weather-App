import { Container, Typography } from '@mui/material';
import { styles } from './styles';

const Header = () => {
  return (
    <Container maxWidth='xl'>
      <Typography component='h1' variant='h2' align='center' color='textPrimary' sx={styles.title}>
        Weather App
      </Typography>
      <Typography
        variant='h4'
        gutterBottom
        align='center'
        color='textSecondary'
        sx={styles.subtitle}
      >
        Search for a city to get its weather conditions.
      </Typography>
    </Container>
  );
};

export default Header;

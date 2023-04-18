import { pxToRem } from '../../helpers/pxToRem';

export const styles = {
  hourlyForecast: {
    position: 'relative',
    borderBottom: '3px solid gray',
    padding: '0px 20px',
  },
  zeroDegrees: {
    position: 'absolute',
    bottom: '0px',
    left: '-18px',
    fontSize: '22px',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: pxToRem(30),
  },

  timeAndUpdateBox: {
    minWidth: pxToRem(600),
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: pxToRem(6),
  },
  updateIcon: {
    ':hover': { transform: 'scale(1.3)' },
    transition: 'all .2s',
  },
  circularProgress: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  buttonBack: {
    fontSize: '16px',
    minWidth: pxToRem(215),
  },
};

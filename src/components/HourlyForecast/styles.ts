import { pxToRem } from '../../helpers/pxToRem';

export const styles = {
  hourlyForecast: {
    position: 'relative',
    maxWidth: pxToRem(992),
    minWidth: pxToRem(932),
    borderBottom: '3px solid gray',
    padding: '0px 20px',
  },
  titleHourly: {
    margin: '30px 0 20px',
    textAlign: 'center',
    ['& span']: { color: '#1769aa' },
  },
  zeroDegrees: {
    position: 'absolute',
    bottom: '0px',
    left: pxToRem(-20),
    fontSize: pxToRem(22),
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
    fontSize: pxToRem(16),
    minWidth: pxToRem(215),
  },
  hourTempCardStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: pxToRem(240),
    width: pxToRem(110),
    background: 'white',
    fontSize: pxToRem(18),
  },
  hourTempCardPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: pxToRem(35),
    backgroundColor: 'yellow',
    borderBottom: '3px solid orange',
  },
};

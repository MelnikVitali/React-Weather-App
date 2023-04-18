import { pxToRem } from '../../helpers/pxToRem';

export const styles = {
  container: {
    maxWidth: pxToRem(1900),
    minWidth: pxToRem(500),
    minHeight: '100vh',
    margin: '0 auto',
    padding: pxToRem(26),
    paddingBottom: pxToRem(250),
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
  contentBox: {
    display: 'flex',
    fontSize: pxToRem(18),
    marginBottom: pxToRem(20),
    padding: pxToRem(20),
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: pxToRem(10),
  },
  currentTemp: {
    display: 'flex',
    gap: pxToRem(10),
    alignItems: 'center',
  },
  buttonBack: {
    fontSize: pxToRem(16),
    minWidth: pxToRem(215),
  },
};

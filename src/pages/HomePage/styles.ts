import { pxToRem } from '@/helpers/pxToRem';

export const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: pxToRem(24),
    marginBottom: pxToRem(24),
    flexGrow: 1,
  },
  formWrapper: {
    padding: '4px 3px 3px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: pxToRem(600),
    position: 'relative',
  },
  circularProgress: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    top: pxToRem(60),
  },
  errorText: {
    position: 'absolute',
    top: pxToRem(-24),
    left: pxToRem(5),
    color: 'red',
    fontSize: pxToRem(16),
  },
  inputSearcher: {
    fontSize: pxToRem(18),
    width: '80%',
  },
};

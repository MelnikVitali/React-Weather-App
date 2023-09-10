import { pxToRem } from '@/helpers/pxToRem';

export const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: pxToRem(1100),
    minHeight: pxToRem(300),
    margin: '50px auto 0',
    padding: pxToRem(40),
    backgroundColor: '#fffdc3',
    flexShrink: 0,
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonBack: {
    marginTop: pxToRem(50),
    fontSize: pxToRem(16),
    minWidth: pxToRem(215),
  },
};

import { pxToRem } from '../../helpers/pxToRem';

export const styles = {
  circularProgress: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
  },
  card: {
    width: pxToRem(260),
    height: '100%',
    borderRadius: 3,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  iconWeather: {
    width: pxToRem(100),
  },
  temperature: {
    padding: pxToRem(20),
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  boxCardContent: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'baseline',
    gap: pxToRem(7),
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    flexShrink: 0,
  },
};

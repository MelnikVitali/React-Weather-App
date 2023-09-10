import { temperatureFormat } from '../temperatureFormat';

describe('temperatureFormat', () => {
  it('returns a value > 0', () => {
    const result = temperatureFormat(19);
    expect(result).toEqual('+19 °C');
  });

  it('returns a value < 0', () => {
    const result = temperatureFormat(-4.13);
    expect(result).toEqual('-4 °C');
  });
  it('returns a empty value', () => {
    const result = temperatureFormat(0);
    expect(result).toEqual(' °C');
  });
});

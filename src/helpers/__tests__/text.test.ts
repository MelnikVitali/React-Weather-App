import { temperatureFormat } from '../temperatureFormat';
import { capitalize, getCustomHours, getCustomMinutes, temperatureToCelsium } from '../text';

describe('text helpers test value', () => {
  it('capitalize', () => {
    const result = capitalize('light snow');
    expect(result).toEqual('Light Snow');
  });
  it('temperatureToCelsium', () => {
    const result = temperatureToCelsium(268.63);
    expect(result).toEqual('-5°C');
  });

  it('getCustomHours', () => {
    const result = getCustomHours(1694288191);
    expect(result).toEqual('22:36');
  });

  it('getCustomHours', () => {
    const result = getCustomMinutes(1694288191);
    expect(result).toEqual('36');
  });
});

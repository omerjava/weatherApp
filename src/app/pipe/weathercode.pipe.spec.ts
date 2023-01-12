import { WeathercodePipe } from './weathercode.pipe';

describe('WeathercodePipe', () => {
  it('create an instance', () => {
    const pipe = new WeathercodePipe();
    expect(pipe).toBeTruthy();
  });
});

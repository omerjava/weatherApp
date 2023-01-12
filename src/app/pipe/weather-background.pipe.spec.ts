import { WeatherBackgroundPipe } from './weather-background.pipe';

describe('WeatherBackgroundPipe', () => {
  it('create an instance', () => {
    const pipe = new WeatherBackgroundPipe();
    expect(pipe).toBeTruthy();
  });
});

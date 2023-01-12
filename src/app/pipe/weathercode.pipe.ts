import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weathercode'
})
export class WeathercodePipe implements PipeTransform {

  transform(code: number): string {

      let weatherInfo = "";
      
      switch(code){
        case 0: weatherInfo="Clear sky"; break;
        case 1: weatherInfo="Mainly clear, partly cloudy, and overcast"; break;
        case 2: weatherInfo="Mainly clear, partly cloudy, and overcast"; break;
        case 3: weatherInfo="Mainly clear, partly cloudy, and overcast"; break;
        case 45: weatherInfo="Fog and depositing rime fog"; break;
        case 48: weatherInfo="Fog and depositing rime fog"; break;
        case 51: weatherInfo="Drizzle: Light, moderate, and dense intensity"; break;
        case 53: weatherInfo="Drizzle: Light, moderate, and dense intensity"; break;
        case 55: weatherInfo="Drizzle: Light, moderate, and dense intensity"; break;
        case 56: weatherInfo="Freezing Drizzle: Light and dense intensity"; break;
        case 57: weatherInfo="Freezing Drizzle: Light and dense intensity"; break;
        case 61: weatherInfo="Rain: Slight, moderate and heavy intensity"; break;
        case 63: weatherInfo="Rain: Slight, moderate and heavy intensity"; break;
        case 65: weatherInfo="Rain: Slight, moderate and heavy intensity"; break;
        case 66: weatherInfo="Freezing Rain: Light and heavy intensity"; break;
        case 67: weatherInfo="Freezing Rain: Light and heavy intensity"; break;
        case 71: weatherInfo="Snow fall: Slight, moderate, and heavy intensity"; break;
        case 73: weatherInfo="Snow fall: Slight, moderate, and heavy intensity"; break;
        case 75: weatherInfo="Snow fall: Slight, moderate, and heavy intensity"; break;
        case 77: weatherInfo="Snow grains"; break;
        case 80: weatherInfo="Rain showers: Slight, moderate, and violent"; break;
        case 81: weatherInfo="Rain showers: Slight, moderate, and violent"; break;
        case 82: weatherInfo="Rain showers: Slight, moderate, and violent"; break;
        case 85: weatherInfo="Snow showers slight and heavy"; break;
        case 86: weatherInfo="Snow showers slight and heavy"; break;
        case 95: weatherInfo="Thunderstorm: Slight or moderate"; break;
        case 96: weatherInfo="Thunderstorm with slight and heavy hail"; break;
        case 99: weatherInfo="Thunderstorm with slight and heavy hail"; break;
    }

    return weatherInfo;

  }

}

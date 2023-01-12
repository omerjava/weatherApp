import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherIcon'
})
export class WeatherIconPipe implements PipeTransform {

  transform(code: number): string {

    let file="";

    switch(code){
      case 0: file= "sunny.png";break;
      case 1: file= "cloudy-sunny.png";break;
      case 2: file= "cloudy-sunny.png";break;
      case 3: file= "cloudy-sunny.png";break;
      case 45: file= "foggy.png";break;
      case 48: file= "foggy.png";break;
      case 51: file= "rainy.png";break
      case 53: file= "rainy.png";break
      case 55: file= "rainy.png";break;
      case 56: file= "rainy.png";break
      case 57: file= "rainy.png";break
      case 61: file= "rainy.png";break;
      case 63: file= "rainy.png";break;
      case 65: file= "rainy.png";break;
      case 66: file= "rain-only.png";break;
      case 67: file= "rain-only.png";break;
      case 71: file= "snow-white.png";break;
      case 73: file= "snow-white.png";break;
      case 75: file= "snow-white.png";break;
      case 77: file= "snow-white.png";break;
      case 80: file= "rain-only.png";break;
      case 81: file= "rain-only.png";break;
      case 82: file= "rain-only.png";break;
      case 85: file= "snow-white.png";break;
      case 86: file= "snow-white.png";break;
      case 95: file= "stormy.png";break;
      case 96: file= "thunder.png";break;
      case 99: file= "thunder.png";break;
  }

  return "assets/"+file;
  }

}

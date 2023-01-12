import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherBackground'
})
export class WeatherBackgroundPipe implements PipeTransform {

  transform(code: number): string {

    let file="";

    switch(code){
      case 0: file= "sunny-big.jpg";break;
      case 1: file= "night-big.jpg";break
      case 2: file= "sunny-big2.jpg";break;
      case 3: file= "sunny-big2.jpg";break;
      case 45: file= "foggy-big.jpg";break;
      case 48: file= "foggy-big.jpg";break;
      case 51: file= "rainy-big2.jpg";break
      case 53: file= "rainy-big2.jpg";break
      case 55: file= "rainy-big2.jpg";break;
      case 56: file= "rainy-big.jpg";break
      case 57: file= "rainy-big.jpg";break
      case 61: file= "rainy-big.jpg";break
      case 63: file= "rainy-big.jpg";break
      case 65: file= "rainy-big2.jpg";break;
      case 66: file= "night-big.jpg";break
      case 67: file= "night-big.jpg";break
      case 71: file= "snow-big.jpg";break;
      case 73: file= "snow-big.jpg";break;
      case 75: file= "snow-night-big.jpg";break;
      case 77: file= "snowy-night.jpg";break;
      case 80: file= "rainy-big2.jpg";break
      case 81: file= "rainy-big.jpg";break
      case 82: file= "rainy-big.jpg";break
      case 85: file= "snow-big.jpg";break;
      case 86: file= "snow-big.jpg";break;
      case 95: file= "thunder-night-big.jpg";break;
      case 96: file= "thunder-big.jpg";break;
      case 99: file= "thunder-big.jpg";break;
  }

  return `background-image: url('../../../assets/${file}'); background-size: cover;`
  }

}

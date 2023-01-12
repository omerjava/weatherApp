import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/interface/city';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  forecast: any = {};
  errorMessage: string = '';
  cities: City[] = [
    { id: 1, name: 'Antwerp', latitude: "51.22", longitude: "4.40" },
    { id: 2, name: 'Brussels', latitude: "50.85", longitude: "4.35" },
    { id: 3, name: 'Brugge', latitude: "51.21", longitude: "3.22" },
    { id: 4, name: 'Charleroi', latitude: "50.41", longitude: "4.44" },
    { id: 5, name: 'Ghent', latitude: "51.05", longitude: "3.72" },
    { id: 6, name: 'Hasselt', latitude: "50.93", longitude: "5.34" },
    { id: 7, name: 'Leuven', latitude: "50.88", longitude: "4.70" },
    { id: 8, name: 'Liege', latitude: "50.63", longitude: "5.57" },
    { id: 9, name: 'Namur', latitude: "50.47", longitude: "4.87" }
  ];
  cityDefault: City = { id: 1, name: 'Antwerp', latitude: "51.22", longitude: "4.40" };
  currentCity: City = { id: 1, name: 'Antwerp', latitude: "51.22", longitude: "4.40" };

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.cityDefault.id);
  }

  getWeatherData(id: any) {
    let city = this.cities.find((v) => Number(id) === v.id) || this.cityDefault;

    this.weatherService.getForecasts(city).subscribe({
      next: (response) => {
        this.forecast = response;
        this.currentCity = city;
      },
      error: (errorResponse: HttpErrorResponse) =>
        (this.errorMessage = errorResponse.message),
      complete: () => console.log(this.forecast),
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { City } from '../interface/city';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private baseApiURL: string = 'https://api.open-meteo.com/v1/forecast?';

  constructor(private httpClient: HttpClient, private router: Router) {}

  getForecasts(city: City): Observable<any> {
    return this.httpClient.get(
      `${this.baseApiURL}latitude=${city.latitude}&longitude=${city.longitude}&daily=snowfall_sum&daily=showers_sum&daily=rain_sum&daily=temperature_2m_max&daily=precipitation_hours&daily=temperature_2m_min&daily=weathercode&timezone=Europe/Brussels&current_weather=true`
    );
  }
}

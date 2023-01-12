import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { DatePipe } from './pipe/date.pipe';
import { WeathercodePipe } from './pipe/weathercode.pipe';
import { WeatherIconPipe } from './pipe/weather-icon.pipe';
import { WeatherBackgroundPipe } from './pipe/weather-background.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DatePipe,
    WeathercodePipe,
    WeatherIconPipe,
    WeatherBackgroundPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

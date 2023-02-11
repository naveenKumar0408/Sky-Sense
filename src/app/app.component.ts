import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  weatherData?: WeatherData;
  cityName: string = 'Bengaluru';
  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {}
  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    // this.weatherService.getWeatherData(cityName).subscribe({
    //   next: (response) => {
    //     this.weatherData = response;
    //     console.log(response);
    //   },
    // });
  }
}

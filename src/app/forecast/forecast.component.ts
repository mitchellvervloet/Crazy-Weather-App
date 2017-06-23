import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';

import { Forecast } from '../forecast';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'cwa-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  cityName: string;
  cityForecast: Forecast[] = [];

  constructor(private weatherService: WeatherService, private route: ActivatedRoute) {

    //Hier wordt de value van de paramatere cityName opgehaald uit de url
    this.cityName = route.snapshot.params['cityname'];

  }

  ngOnInit() {

    //Hier wordt de data van de api opgesplitst, zodat niet alle data beschikbaar is in de view.
    this.cityForecast.splice(0, this.cityForecast.length);
    this.weatherService.oneDayForecast(this.cityName).subscribe((data) => {
      for(let i = 0; i < data.list.length; i += 8) {
        const temporary = new Forecast(data.list[i].dt_txt,
            data.list[i].weather[0].icon,
            data.list[i].main.temp_max,
            data.list[i].main.temp_min,
            data.list[i].main.temp)
        this.cityForecast.push(temporary);
      }
    });
  }

}

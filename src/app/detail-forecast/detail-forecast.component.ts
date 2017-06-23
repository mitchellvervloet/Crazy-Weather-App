import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';

import { Forecast } from '../forecast';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'cwa-detail-forecast',
  templateUrl: './detail-forecast.component.html',
  styleUrls: ['./detail-forecast.component.css']
})
export class DetailForecastComponent implements OnInit {

  cityName: string;
  forecastForm: FormGroup;
  cityForecast: Forecast[] = [];

  constructor(private weatherService: WeatherService, private route: ActivatedRoute) {

    this.cityName = route.snapshot.params['cityname'];
    console.log(this.cityName);

  }

  ngOnInit() {

    this.forecastForm = new FormGroup({
      forecastCity: new FormControl('')
    });

    this.cityForecast.splice(0, this.cityForecast.length);
    this.weatherService.fiveDayForecast(this.cityName).subscribe((data) => {
      console.log(data);
      for(let i = 1; i < 9; i++) {
        const temporary = new Forecast(data.list[i].dt_txt,
            data.list[i].weather[0].icon,
            data.list[i].main.temp_max,
            data.list[i].main.temp_min,
            data.list[i].main.temp)
        this.cityForecast.push(temporary);
      }
    });
  }

  // onSubmit() {
  //   this.cityForecast.splice(0, this.cityForecast.length);
  //   this.weatherService.fiveDayForecast(this.forecastForm.value.forecastCity).subscribe((data) => {
  //     console.log(data);
  //     for(let i = 0; i < data.list.length; i += 8) {
  //       const temporary = new Forecast(data.list[i].dt_txt,
  //                                      data.list[i].weather[0].icon,
  //                                      data.list[i].main.temp_max,
  //                                      data.list[i].main.temp_min)
  //       this.cityForecast.push(temporary);
  //     }
  //   });
  // }

}

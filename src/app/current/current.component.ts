import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/Rx';

import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';

@Component({
  selector: 'cwa-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  myLocationWeather: CurrentWeather;
  currentWeather: CurrentWeather;
  location;
  cityName: string;

  constructor(private weatherService: WeatherService, private route: ActivatedRoute) {

    //Hier wordt de value van de paramatere cityName opgehaald uit de url
    route.params.subscribe(val => {
      this.cityName = val['cityname'];

      // Hier wordt die value van cityname in de search method gestopt, zodat er gezocht wordt met de value vanuit de input
      this.weatherService.searchOnCityWeather(this.cityName).subscribe((data) => {
        this.myLocationWeather = new CurrentWeather(data.name,
            data.main.temp,
            data.weather[0].icon,
            data.main.temp_max,
            data.main.temp_min);
        console.log(data);
      });
    });

  }

  ngOnInit() {
    
  }

}

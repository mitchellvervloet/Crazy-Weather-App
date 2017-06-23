import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/Rx';

import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';

@Component({
  selector: 'cwa-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {
  myLocationWeather: CurrentWeather;
  currentWeather: CurrentWeather;
  location;

  constructor(private weatherService: WeatherService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.data.subscribe(
    //     (data: {myLocationWeather: CurrentWeather}) => {
    //       this.myLocationWeather = data.myLocationWeather;
    //     }
    // )

    // this.currentWeather = this.weatherService.weatherNow();
    navigator.geolocation.getCurrentPosition((pos) => {
      this.location = pos.coords;
      console.log(this.location);
      const lat = this.location.latitude;
      const lon = this.location.longitude;
      console.log(lat + ' en ' +lon);
      this.weatherService.localWeather(lat, lon).subscribe((data) => {
        console.log(data);
        this.myLocationWeather = new CurrentWeather(data.name,
          data.main.temp,
          data.weather[0].icon,
          data.main.temp_max,
          data.main.temp_min);
      })
    })
  }

  // onSubmit(weatherForm: NgForm) {
  //   this.weatherService.searchOnCityWeather(weatherForm.value.cityName).subscribe((data) => {
  //     this.myLocationWeather = new CurrentWeather(data.name,
  //                                                 data.main.temp,
  //                                                 data.weather[0].icon,
  //                                                 data.weather[0].description,
  //                                                 data.main.temp_max,
  //                                                 data.main.temp_min);
  //   });
  // }

}

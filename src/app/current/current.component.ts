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

    // this.cityName = route.snapshot.params['cityname'];
    // console.log('stad is '+this.cityName);
    route.params.subscribe(val => {
      // put the code from `ngOnInit` here
      this.cityName = val['cityname'];
      console.log('stad is '+this.cityName);

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
    // this.route.data.subscribe(
    //     (data: {myLocationWeather: CurrentWeather}) => {
    //       this.myLocationWeather = data.myLocationWeather;
    //     }
    // )

    // this.cityName = this.route.snapshot.params['cityname'];
    // console.log('stad is '+this.cityName);
    //
    // this.weatherService.searchOnCityWeather(this.cityName).subscribe((data) => {
    //   this.myLocationWeather = new CurrentWeather(data.name,
    //       data.main.temp,
    //       data.weather[0].icon,
    //       data.weather[0].description,
    //       data.main.temp_max,
    //       data.main.temp_min);
    // });

    // this.currentWeather = this.weatherService.weatherNow();
    // navigator.geolocation.getCurrentPosition((pos) => {
    //   this.location = pos.coords;
    //   console.log(this.location);
    //   const lat = this.location.latitude;
    //   const lon = this.location.longitude;
    //   console.log(lat + ' en ' +lon);
    //   this.weatherService.localWeather(lat, lon).subscribe((data) => {
    //     console.log(data);
    //     this.myLocationWeather = new CurrentWeather(data.name,
    //       data.main.temp,
    //       data.weather[0].icon,
    //       data.weather[0].description,
    //       data.main.temp_max,
    //       data.main.temp_min);
    //   })
    // })
  }
  //
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

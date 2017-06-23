import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/Rx';

import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';

@Component({
  selector: 'cwa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchValue: string;

  constructor(private weatherService: WeatherService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(weatherForm: NgForm) {
    // this.weatherService.searchOnCityWeather(weatherForm.value.cityName).subscribe((data) => {
    //   this.myLocationWeather = new CurrentWeather(data.name,
    //       data.main.temp,
    //       data.weather[0].icon,
    //       data.weather[0].description,
    //       data.main.temp_max,
    //       data.main.temp_min);
    // });
    this.searchValue = weatherForm.value.cityName;
    console.log(this.searchValue);
    this.router.navigate(['/current', this.searchValue]);
  }

}

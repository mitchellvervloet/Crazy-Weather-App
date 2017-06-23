import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  location;

  constructor(private weatherService: WeatherService, private route: ActivatedRoute) { }

  ngOnInit() {

    //Als de pagina ingeladen wordt, wordt de huidige locatie bepaald en deze data wordt in een array gestopt die bereikbaar is voor de view
    navigator.geolocation.getCurrentPosition((pos) => {
      this.location = pos.coords;
      const lat = this.location.latitude;
      const lon = this.location.longitude;
      this.weatherService.localWeather(lat, lon).subscribe((data) => {
        this.myLocationWeather = new CurrentWeather(data.name,
          data.main.temp,
          data.weather[0].icon,
          data.main.temp_max,
          data.main.temp_min);
      })
    })
  }

}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { CurrentWeather } from './current-weather';
import { Forecast } from './forecast';

@Injectable()
export class WeatherService {
    myLocationWeather: CurrentWeather;
    location;

    constructor(private http: Http) { }

    localWeather() {
    return new Promise ((res, rej) => {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.location = pos.coords;
        const lat = this.location.latitude;
        const lon = this.location.longitude;
        return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c816f4edb65230329144dcecc7f5f66a&units=metric`)
            .map((response:Response) => response.json()).toPromise().then(
                (data) => {
                  this.myLocationWeather = new CurrentWeather(data.name,
                                                              data.main.temp,
                                                              data.weather[0].icon,
                                                              data.weather[0].description,
                                                              data.main.temp_max,
                                                              data.main.temp_min);
                  res(this.myLocationWeather);
                }
            );
      })
    });

    // return this.http.get('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=c816f4edb65230329144dcecc7f5f66a&units=metric')
    //     .map((response:Response) => response.json());
    }

    searchOnCityWeather(cityName: string) {
        return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c816f4edb65230329144dcecc7f5f66a&units=metric`)
            .map((response:Response) => response.json());
    }

    fiveDayForecast(cityName: string) {
        return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=c816f4edb65230329144dcecc7f5f66a&units=metric`)
            .map((response:Response) => response.json());
    }

}

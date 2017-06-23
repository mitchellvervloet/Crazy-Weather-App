import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';

import { CurrentWeather } from './current-weather';
import { Forecast } from './forecast';

@Injectable()
export class WeatherService {
    myLocationWeather: CurrentWeather;
    location;
    searchValue: string;

    constructor(private http: Http, public route: ActivatedRoute) { }

    //Hier wordt het lokale weer opgehaald van de api met behulp van de longitude en latitude die meegegeven worden.
    localWeather(lat: string, lon: string) {
        return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c816f4edb65230329144dcecc7f5f66a&units=metric`)
            .map((response:Response) => response.json());
    }

    //Als er gezocht wordt op een stad, wordt de input hierheen gestuurd en wordt de current weather opgehaald aan de hand van die stad
    searchOnCityWeather(cityName: string) {
        return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c816f4edb65230329144dcecc7f5f66a&units=metric`)
            .map((response:Response) => response.json());
    }

    //Als er gezocht wordt op een stad, wordt de input hierheen gestuurd en wordt de onedayforecast opgehaald aan de hand van die stad
    oneDayForecast(cityName: string) {
        return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=c816f4edb65230329144dcecc7f5f66a&units=metric`)
            .map((response:Response) => response.json());
    }

}

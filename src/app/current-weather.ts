//class definitie voor localweather en currenweather
export class CurrentWeather {
    constructor(public cityName: string,
                public temp: string,
                public icon: string,
                public tempMax: string,
                public tempMin: string) {

    }
}

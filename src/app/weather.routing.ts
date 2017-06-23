import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CurrentComponent } from './current/current.component';
import { ForecastComponent } from './forecast/forecast.component';
import { DetailForecastComponent } from "./detail-forecast/detail-forecast.component";

const WEATHER_ROUTER:Routes = [
    // {path: '', component: CurrentComponent, resolve: {myLocationWeather: ResolveLocationService}, children: [
    //     // { path: '', component:  }
    // ]},
    {path: 'longforecast/:cityname', component: ForecastComponent},
    {path: 'current/:cityname', component: CurrentComponent},
    {path: 'detailforecast/:cityname', component: DetailForecastComponent},
    // {path: ':cityname', children: [
    //     {path: 'current', component: CurrentComponent},
    //     {path: 'forecast', component: ForecastComponent}
    // ]}
]

export const weatherRouting:ModuleWithProviders = RouterModule.forRoot(WEATHER_ROUTER);
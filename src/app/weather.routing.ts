import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CurrentComponent } from './current/current.component';
import { ForecastComponent } from './forecast/forecast.component';
import { DetailForecastComponent } from "./detail-forecast/detail-forecast.component";

//Hier worden de componenten aan een router gekoppeld.
const WEATHER_ROUTER:Routes = [
    {path: 'longforecast/:cityname', component: ForecastComponent},
    {path: 'current/:cityname', component: CurrentComponent},
    {path: 'detailforecast/:cityname', component: DetailForecastComponent},
]

export const weatherRouting:ModuleWithProviders = RouterModule.forRoot(WEATHER_ROUTER);
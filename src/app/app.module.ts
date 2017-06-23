import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CurrentComponent } from './current/current.component';
import { LocalComponent } from './local/local.component';
import { ForecastComponent } from './forecast/forecast.component';
import { DetailForecastComponent } from './detail-forecast/detail-forecast.component';
import { weatherRouting } from './weather.routing';
import { WeatherService } from './weather.service';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrentComponent,
    LocalComponent,
    ForecastComponent,
    DetailForecastComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    weatherRouting,
    FormsModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

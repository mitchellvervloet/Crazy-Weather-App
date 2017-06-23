import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from "../weather.service";

@Component({
  selector: 'cwa-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  cityName: string;
  searchValue: string;

  constructor(private route: ActivatedRoute, private router: Router, private ws: WeatherService) {

    // this.cityName = route.snapshot.params['cityname'];
    // console.log(this.cityName);

    route.params.subscribe(val => {
      // put the code from `ngOnInit` here
      this.cityName = val['cityname'];
      console.log('stad is '+this.cityName);

    });

  }

  ngOnInit() {

    this.route.params.subscribe(val => {
      // put the code from `ngOnInit` here
      this.cityName = val['cityname'];
      console.log('stad is '+this.cityName);

    });


    // this.cityName = this.route.snapshot.params['cityname'];
    // console.log(this.cityName);

  }

}

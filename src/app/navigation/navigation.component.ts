import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cwa-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  cityName: string;
  searchValue: string;

  constructor(private route: ActivatedRoute) {

    //Hier wordt naar de huidige rouyter gekeken en naar de parameters die daarbij horen. De value van parameter cityname wordt in een variabele gestopt die bereikbaar is in de view.
    route.params.subscribe(val => {
      this.cityName = val['cityname'];
    });

  }

  ngOnInit() {

  }

}

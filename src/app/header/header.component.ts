import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'cwa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchValue: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //Als er gezocht wordt, wordt de waarde van het input veld opgehaald en doorgestuurd als parameter. Pagina wordt geredirect naar currentcomponent + de value
  onSubmit(weatherForm: NgForm) {
    this.searchValue = weatherForm.value.cityName;
    this.router.navigate(['/current', this.searchValue]);
  }

}

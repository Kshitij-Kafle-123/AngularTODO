import { Component, OnInit } from '@angular/core';
import { HardcodedService } from '../service/hardcoded.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //isUserLoggedIn: boolean=false;
  constructor(private HardcodedService:HardcodedService) { }

  ngOnInit() {
  //this.isUserLoggedIn= this.HardcodedService.isUserLoggedIn();
  }

}

import { Component, OnInit } from '@angular/core';
import { HardcodedService } from '../service/hardcoded.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private HardcodedService:HardcodedService) { }

  ngOnInit() {
    this.HardcodedService.logout();

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedService } from '../service/hardcoded.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = ""
  password = ""
  errorMessage = "Invalid details"
  invalidLogin = false
  //Router
  //Dependency Injection

  constructor(private router: Router,
   private HardcodedService: HardcodedService) { }

  ngOnInit() {
  }
  handleLogin() {
    // console.log(this.name);
    // console.log(this.password);

    //if (this.name === 'kshitij' && this.password === 'kafle')
    if(this.HardcodedService.authenticate(this.name, this.password)) {
      this.router.navigate(['welcome', this.name])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}

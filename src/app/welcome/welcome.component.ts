import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

name1=''
  //ActivatedRoute
  constructor(
    private route:ActivatedRoute,
    private service: WelcomeDataService ) { }

  ngOnInit() {
   
    //console.log(this.route.snapshot.params['name'])
  this.name1=this.route.snapshot.params['name']
  }
  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBean());
    //console.log("welcomes");
this.service.executeHelloWorldBean().subscribe(
response=>this.handleSuccessfulResponse(response)
);

  }

  handleSuccessfulResponse(response){
console.log(response);
  }
}

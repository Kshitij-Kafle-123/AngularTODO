import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedService {

  constructor() { }

  authenticate(name, password) {
    //console.log('before '+ this.isUserLoggedIn());
    if (name === 'kshitij' && password === 'kafle') {
      sessionStorage.setItem('authenticateUser', name);
      return true;
    } 
      return false;
    
  }

  isUserLoggedIn() {

    let user = sessionStorage.getItem('authenticateUser')
    return !(user === null)
  }
  
logout(){
 sessionStorage.removeItem('authenticateUser') 
}

}

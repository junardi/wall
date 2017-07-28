import { Component, OnInit, Inject } from '@angular/core';   

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  inLogin = true;

  constructor(    
    @Inject('authService') private authService 
  ) {    
  }

  ngOnInit() {        
  }              

  login() { 
    this.authService.login();
  }

}

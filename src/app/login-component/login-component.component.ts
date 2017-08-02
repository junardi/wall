import { Component, OnInit, Inject } from '@angular/core';        
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  inLogin = true;

  constructor(    
    @Inject('authService') private authService, 
    private router: Router 
  ) {    
  }

  ngOnInit() {          
    if(this.authService.getUserData() !== null) { 
      this.router.navigateByUrl("/wall");
    }   
  }              

  login() { 
    this.authService.login();
  }

}

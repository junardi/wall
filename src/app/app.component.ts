import { Component, Input, Inject } from '@angular/core';    

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',          
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(          
  	@Inject('authService') private authService    
  ) {                
  }    

  processLogout() {  
  	this.authService.logout();
  }

}


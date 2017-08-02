import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-default-component',
  templateUrl: './default-component.component.html',
  styleUrls: ['./default-component.component.css']
})
export class DefaultComponentComponent implements OnInit {

  constructor(          
  	@Inject('authService') private authService    
  ) {                
  }   

  ngOnInit() {    
    //console.log(this.authService.getUserData());             
    //console.log(this.authService.user);        
    //this.authService.user.subscribe(data => console.log(data));  
  }    

  processLogout() {  
  	this.authService.logout();
  }


}

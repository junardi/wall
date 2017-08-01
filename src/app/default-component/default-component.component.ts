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
  }    

  processLogout() {  
  	this.authService.logout();
  }


}

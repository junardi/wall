import { Component, OnInit } from '@angular/core';   
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  sub: any[] = [];    
  title: string = "";

  constructor(   
 	private route: ActivatedRoute,
  	private router: Router
  ) {}

  ngOnInit() {   
	
	this.route.data.subscribe(data => {     
		this.title = data.title;
	});     
  
  }

}

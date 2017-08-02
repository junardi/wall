import { Component, OnInit, Inject } from '@angular/core';   
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-wall-component',
  templateUrl: './wall-component.component.html',
  styleUrls: ['./wall-component.component.css']
})
export class WallComponentComponent implements OnInit {

	userDetails: any;

	constructor(@Inject('authService') private authService, private router: Router) { }

	ngOnInit() {    

		if(this.authService.getUserData() === null) { 
			this.router.navigateByUrl("/login");
		}        

		this.userDetails = this.authService.getUserData();      

		console.log(this.userDetails);
	}

}

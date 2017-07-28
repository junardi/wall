import { Component, OnInit, OnDestroy } from '@angular/core';   
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit, OnDestroy {

	id: number;  
	private sub: any;     

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {      
		this.sub = this.route.params.subscribe(params => { 
			//this.id = +params['id']; // (+) converts string 'id' to a number              
			this.id = +params.id;
			// In a real app: dispatch action to load the details here.            
			console.log(params);
		});    

		console.log(this.id);
	}         

	ngOnDestroy() { 
		this.sub.unsubscribe();
	}

}

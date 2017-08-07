import { Component, OnInit, Inject } from '@angular/core';    
import { Router, ActivatedRoute, ParamMap } from '@angular/router';         
import { AngularFireAuth } from 'angularfire2/auth';  
import { CustomFormsModule } from 'ng2-validation';     
//import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponentComponent implements OnInit {

  // first_name: any;    
  // last_name: any;   
  // mobile_number: any;     
  // email: any;     
  // password: any;    
  // password_confirmation: any;   


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

  signup(formData) { 
  	console.log(formData);
    console.log(formData.value);    

    if(formData.valid) { 

    }
  }

}

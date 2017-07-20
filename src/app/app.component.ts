import { Component, Input } from '@angular/core';    
import {NgForm} from '@angular/forms';    

import { Router, ActivatedRoute, ParamMap } from '@angular/router';   
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',          
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router, public afAuth: AngularFireAuth) {                
  }    

  processLogout() { 
    this.afAuth.auth.signOut();   
    this.router.navigateByUrl("/login");
  }

}


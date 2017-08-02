import { Injectable } from '@angular/core';       
import { Router, ActivatedRoute, ParamMap } from '@angular/router';   
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';    
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';

@Injectable()
export class AuthServiceService {

	user: Observable<firebase.User>;    

 	constructor( 
 		private storage: LocalStorageService,   
	    private activatedRoute: ActivatedRoute,  
	    private router: Router,  
	    public afAuth: AngularFireAuth
 	) {        
 		this.user = afAuth.authState;
 	}           

 	login() {
	    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((data) => {              
	    	this.storage.store('userData', data);
	    	this.router.navigateByUrl("/wall");
	    });
	}         

	logout() { 
	 	this.storage.clear('userData');
    	this.afAuth.auth.signOut();   
    	this.router.navigateByUrl("/login");
	}     

	getUserData() { 
		return this.storage.retrieve('userData');
	}

}

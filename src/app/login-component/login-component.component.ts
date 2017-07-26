import { Component, OnInit, Inject } from '@angular/core';   
import { Router, ActivatedRoute, ParamMap, Route } from '@angular/router';   
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';    
import {NgForm} from '@angular/forms';   
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  sub: any[] = [];    
  title: string = "";     

  user: Observable<firebase.User>;    

  constructor( 
    private storage: LocalStorageService,   
    private activatedRoute: ActivatedRoute,  
    private router: Router,  
    public afAuth: AngularFireAuth,     
    @Inject('authService') private authService 
  ) {    
  	this.user = afAuth.authState;
  }

  ngOnInit() {        

    console.log(this.authService.sampleText);

  	this.activatedRoute.data.subscribe(data => {     
  		this.title = data.title;
  	});        

  	this.user.subscribe(userData => {    
  		console.log(userData);
  	});     
  }              

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((data) => { 
    	console.log("Lets navigate");      
    	console.log(data);                   
    	this.storage.store('userData', data);
    	this.router.navigateByUrl("/");
    });
  }

  logout() {
    this.afAuth.auth.signOut();   
    this.router.navigateByUrl("/login");
  }    



}

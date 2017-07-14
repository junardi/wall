import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';   
import { FormsModule } from '@angular/forms';    
import { HttpModule, JsonpModule } from '@angular/http';     
import { AngularFireModule } from 'angularfire2';            
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from './../environments/firebase.config';   

import { AppComponent } from './app.component';   
import { KeysPipe } from './keys.pipe';
import { HomeComponentComponent } from './home-component/home-component.component';    
import appRoutes from "./app.routes"; 

@NgModule({
  declarations: [   
    AppComponent, 
    KeysPipe, HomeComponentComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpModule,
    JsonpModule, 
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFireDatabaseModule, 
    AngularFireAuthModule,    
    appRoutes
  ],
  providers: [  

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

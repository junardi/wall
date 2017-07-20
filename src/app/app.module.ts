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
import { routing, appRoutingProviders } from './app.routes';
import { LoginComponentComponent } from './login-component/login-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';        
import { Ng2Webstorage } from 'ngx-webstorage';

@NgModule({
  declarations: [   
    AppComponent, 
    KeysPipe, HomeComponentComponent, LoginComponentComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpModule,
    JsonpModule, 
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFireDatabaseModule, 
    AngularFireAuthModule,    
    routing, 
    Ng2Webstorage
  ],
  providers: [  
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

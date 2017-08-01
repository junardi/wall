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
import { AuthServiceService } from './auth-service.service';
import { PostComponentComponent } from './post-component/post-component.component';
import { OverviewComponentComponent } from './overview-component/overview-component.component';
import { SpecsComponentComponent } from './specs-component/specs-component.component';
import { DefaultComponentComponent } from './default-component/default-component.component';

@NgModule({
  declarations: [   
    AppComponent, 
    KeysPipe, HomeComponentComponent, LoginComponentComponent, PageNotFoundComponent, PostComponentComponent, OverviewComponentComponent, SpecsComponentComponent, DefaultComponentComponent
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
    appRoutingProviders, 
    {provide: 'authService', useClass:AuthServiceService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

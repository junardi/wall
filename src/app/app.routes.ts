import { Routes, RouterModule } from '@angular/router'; 
import { HomeComponentComponent } from './home-component/home-component.component';      
import { LoginComponentComponent } from './login-component/login-component.component';      
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';  

export const routes: Routes = [     
 //  { 
	// path: '', redirectTo: 'login', pathMatch: 'full'
 //  },    
  { 
	path: '', component:HomeComponentComponent  
  }, 
  { 
  	path: 'login', component:LoginComponentComponent
  }, 
  {   
  	path: '**', component:PageNotFoundComponent
  }
]; 

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot( 
	routes,    
	{ enableTracing: true } 
);
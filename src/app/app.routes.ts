import { Routes, RouterModule } from '@angular/router'; 
import { HomeComponentComponent } from './home-component/home-component.component';      
import { LoginComponentComponent } from './login-component/login-component.component';      
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';        
import { PostComponentComponent } from './post-component/post-component.component';     
import { OverviewComponentComponent } from './overview-component/overview-component.component';      
import { SpecsComponentComponent } from './specs-component/specs-component.component'; 

export const routes: Routes = [     
 //  { 
	// path: '', redirectTo: 'login', pathMatch: 'full'
 //  },    
  { 
	  path: '', component:HomeComponentComponent  
  }, 
  { 
  	path: 'login', component:LoginComponentComponent, data: { title: 'Welcome to login' }
  },      
  {    
    children: [   
      {path: '', redirectTo: 'overview', pathMatch: 'full'}, 
      {path: 'overview', component: OverviewComponentComponent}, 
      {path: 'specs', component: SpecsComponentComponent}
    ], 
    path: 'post-detail/:id', component:PostComponentComponent
  },               
  {   
  	path: '**', component:PageNotFoundComponent
  } 
]; 

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot( 
	routes
	//{ enableTracing: true } 
);
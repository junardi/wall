import { Routes, RouterModule } from '@angular/router'; 
import { HomeComponentComponent } from './home-component/home-component.component';      
import { LoginComponentComponent } from './login-component/login-component.component';      
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';        
import { PostComponentComponent } from './post-component/post-component.component';     
import { OverviewComponentComponent } from './overview-component/overview-component.component';      
import { SpecsComponentComponent } from './specs-component/specs-component.component';    
import { DefaultComponentComponent } from './default-component/default-component.component';     
import { WallComponentComponent } from './wall-component/wall-component.component';

export const routes: Routes = [     
  { 
	  path: '', component:DefaultComponentComponent,
    children: [      
      { path: '', redirectTo: 'wall', pathMatch: 'full' },  
      { path: 'home', component: HomeComponentComponent },        
      { path: 'wall', component: WallComponentComponent }
    ] 
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
	routes
	//{ enableTracing: true } 
);
import { HomeComponentComponent } from './home-component/home-component.component';      
import { AppComponent } from './app.component';  
import { RouterModule } from '@angular/router'; 

const routes = [      
  {path: '', component:HomeComponentComponent}
]; 


export default RouterModule.forRoot(routes);    
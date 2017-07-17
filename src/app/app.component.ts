import { Component, Input } from '@angular/core';    
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';       
import {NgForm} from '@angular/forms'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',          
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  itemName = "Test Name"; 
  itemValue ="Test Value";    

  title = 'Visitor';         
  items: FirebaseListObservable<any[]>;   
  name: FirebaseObjectObservable<any>;          
  itemSubTestItem: FirebaseListObservable<any[]>;   
  arrayValue: FirebaseObjectObservable<any>;    

  constructor(private db:AngularFireDatabase) { 
    this.items = db.list('/items');     
  	this.name = db.object('/name');        
    this.name.update({ first_name: 'Markie'});   
    this.name.update({ last_name: 'Boribor'});     
    this.name.update({ middle_name: 'Babon'});            
  }    

  deleteName() { 
    this.name.remove();
  }      

  deleteItem(key: string) { 
    this.items.remove(key);
  }     

  addItem(item1, item2) { 
    this.items.push({ [item1]: item2 });   
    console.log(item1);     
    console.log(item2);   
  }    

  addSubItem(f: NgForm, mainItemKey) {        
    this.itemSubTestItem = this.db.list('/items/' + mainItemKey + '/subItem');        
    this.itemSubTestItem.push({ subName: f.value.subItemValue });       
    console.log("Let's add sub item");     
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }               

  deleteSubItem(mainItemKey, subItemKey) {        
    this.itemSubTestItem = this.db.list('/items/' + mainItemKey + '/subItem'); 
    this.itemSubTestItem.remove(subItemKey);
  }

}


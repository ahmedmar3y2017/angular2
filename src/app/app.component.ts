import { Component } from '@angular/core';
import {status} from './shared/shared'


@Component({
  moduleId :module.id,
  selector: 'my-app',
 templateUrl :"app.component.html"
})
export class AppComponent  {
   

   
   name :string = 'ahmed'; 
address : string ="tanta";
flag : boolean =true;
arr : string[] =["ahmed" , "mohamed" , "eslam"];

users: any[] =[
{id : 1 , name : 'ahmed' , salary : 2000},
{id : 2 , name : 'mohamed' , salary : 2000},
{id : 3 , name : 'eslam' , salary : 2000},
{id : 4 , name : 'ali' , salary : 2000}

];
status :status=status.available;



getTitle():string{

return "Done ya man : ";

}



}

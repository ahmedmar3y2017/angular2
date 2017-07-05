import { Component } from '@angular/core';
import {status} from './shared/shared'

import { Iuser } from "./shared/interfaces/user.interface";


@Component({
  moduleId :module.id,
  selector: 'my-app',
  styleUrls: ['app.component.css'] , 
 templateUrl :"app.component.html"
})
export class AppComponent  {
   

   
   name :string = 'ahmed'; 
address : string ="tanta";
flag : boolean =false;
arr : string[] =["ahmed" , "mohamed" , "eslam"];

users: any[] =[
{id : 1 , name : 'ahmed' , salary : 20.5587},
{id : 2 , name : 'mohamed' , salary : 2000},
{id : 3 , name : 'eslam' , salary : 2000},
{id : 4 , name : 'ali' , salary : 2000}

];  
status :status=status.available;

birthdate:Date =new Date(2010,9,30);
value : string= "faculty of computer and info " ;

start:number=0;
end:number=3;
myvalue : number=5;

listUser : Iuser[]=[

{id : 1 , username : "mohamed"},
{id : 2 , username : "ahmed"},
{id : 3 , username : "eslam"}
];

click(){

alert("Done ya man ");

}




Alert(){

alert("Done");

}
getTitle():string{
  
return "Done ya man : ";

}



}

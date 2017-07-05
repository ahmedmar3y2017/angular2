import { Pipe, PipeTransform } from '@angular/core';
import { Iuser } from "../interfaces/user.interface";
@Pipe({name: 'filter'})
export class filterPipe implements PipeTransform {
    transform(value: Iuser [] , ss : string=''): any {
        


        return value.filter(x => x.username.toLowerCase().startsWith(ss.toLowerCase()));
    }
}
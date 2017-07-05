import {Pipe , PipeTransform} from '@angular/core';





@Pipe({
name: 'basic'
})

export class basicpipe implements PipeTransform{

transform(value : number , factor : number){
return value*factor;


}

}

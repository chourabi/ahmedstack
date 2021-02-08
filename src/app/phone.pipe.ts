import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    

    var vf = value+="";
    console.log(vf);

    var retour="";
    for (let i = 0; i < vf.length; i++) {

      if (i < 2 ) {
        retour+=vf[i];
      }else if( i>=2  && i < 6 ){
        retour+="*";
      }else{
        retour+=vf[i];
      }
      
    }

    retour+="?";
    
    return retour;
  }

}

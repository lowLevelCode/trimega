import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ssnFormat-pipe'
})
export class SsnFormatPipe implements PipeTransform {

  transform(value: string): string {
    if(value === '') 
      return '';
        
    const first = value.substring(0,3) || '';
    const middle = value.substring(3,5) || '';
    const end = value.substring(5,9) || '';
    return `${first}-${middle}-${end}`;
  }

  parse(value:string):string {
    return value.split('-').join('');
  }

}

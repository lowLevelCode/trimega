import { Directive, ElementRef, HostListener } from '@angular/core';
import { SsnFormatPipe } from '../pipes/ssn-format.pipe';

@Directive({
  selector: '[SsnFormat]'
})
export class SsnFormatDirective {

  constructor(
    private readonly el:ElementRef,
    private readonly ssnFormatPipe:SsnFormatPipe) { }

  @HostListener('input', ['$event']) onInputChange(event) {    
    const initalValue = this.ssnFormatPipe.parse(this.el.nativeElement.value);    
    const onlyNumber = initalValue.replace(/[^0-9]*/g, '');        
    this.el.nativeElement.value = this.ssnFormatPipe.transform(onlyNumber);    
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { REG_EXP } from './shared/const';
import { SsnFormatPipe } from './shared/pipes/ssn-format.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form:FormGroup;

  constructor(
    private readonly fb:FormBuilder,
    private readonly ssnFormatPipe:SsnFormatPipe) {
    this.form = fb.group({
      prefix: new FormControl(''),
      gender: new FormControl('',Validators.required),
      firstName: new FormControl('',Validators.required),
      middleName: new FormControl(''),
      lastName: new FormControl('',Validators.required),
      postfix: new FormControl(''),
      date: new FormControl('', Validators.required),
      ssn: new FormControl('', Validators.compose([Validators.required, Validators.pattern(REG_EXP.SSN)])),
      email: new FormControl('', Validators.email),
      phone: new FormControl('', Validators.pattern(REG_EXP.PHONE)),
      alternativePhone: new FormControl('',Validators.pattern(REG_EXP.PHONE)),
    });
    
    this.form.get('date').valueChanges.subscribe(data => {
      if(data){        
        this.form.get('ssn').setValidators(null);        
      } else{
        this.form.get('ssn').setValidators([Validators.required]);   
      }
      this.form.get('ssn').updateValueAndValidity({ emitEvent: false });
    });

    this.form.get('ssn').valueChanges.subscribe(data => {      
      if(data) {        
        this.form.get('date').setValidators(null);

      } else{
        this.form.get('date').setValidators([Validators.required]);   
      }
      this.form.get('date').updateValueAndValidity({ emitEvent: false });
    });    
  }

  onSubmit() {
    if(this.form.invalid){
      console.error("invalid form");
      return;
    }
    
    console.log("Form value:",this.form.value);
  }

  validateFormcontrolName(name:string, status:string = 'danger'){
    return this.form.get(name).touched ? (this.form.get(name).invalid  ? status : 'success') : 'basic';
  }

  isInvalidOrTouched(name:string){
    return this.form.get(name).invalid && this.form.get(name).touched;
  }  
}

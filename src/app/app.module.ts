import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbInputModule, NbButtonModule, NbSelectModule, NbDatepickerModule, NbFormFieldModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SsnFormatDirective } from './shared/directives/ssn-format.directive';
import { SsnFormatPipe } from './shared/pipes/ssn-format.pipe';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { IConfig, NgxMaskModule } from 'ngx-mask';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [
    AppComponent,
    SsnFormatDirective,
    SsnFormatPipe,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    NbDatepickerModule.forRoot(),
    NgxMaskModule.forRoot(maskConfigFunction),
    NbFormFieldModule,
    NbIconModule,
    NbDateFnsDateModule    
  ],
  providers: [SsnFormatPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { AutoFocusDirective } from './directives/auto-focus.directive';
import { ShortenPipe } from './pipes/shorten.pipe';


@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    AutoFocusDirective,
    ShortenPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }

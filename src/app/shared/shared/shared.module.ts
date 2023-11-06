import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import {HeaderComponent} from '../../components/header/header.component'
import {BodyComponent} from '../../components/body/body.component'



@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderComponent,
    BodyComponent
  ]
})
export class SharedModule { }

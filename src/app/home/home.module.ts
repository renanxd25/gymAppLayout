import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    HomePageRoutingModule,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [HomePage]
})


export class HomePageModule {


}

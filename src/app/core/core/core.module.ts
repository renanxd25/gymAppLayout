import { NgModule } from '@angular/core';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from 'src/environments/environment';


@NgModule({
  imports: [
   IonicModule.forRoot(),
   AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  exports: [
    BrowserModule,
    IonicModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class CoreModule { }

import { Com3 } from './../../components/com-3/com-3';
import { Com2 } from './../../components/com-2/com-2';
import { Com1 } from './../../components/com-1/com-1';
import { HomePage } from './home';
import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';


@NgModule({
  declarations: [
    HomePage,
    Com1, Com2, Com3
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  
  ],
  exports: [
    HomePage,
  ]
})
export class HomePageModule {}

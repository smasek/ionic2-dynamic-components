import { IProduct } from './../IProduct';
import { Component } from '@angular/core';


/**
 * Generated class for the Com3 component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'com-3',
  templateUrl: 'com-3.html'
})
export class Com3 implements IProduct{

  text: string;

  constructor() {
    console.log('Hello Com3 Component');
    this.text = 'Hello World  form com-3' ;
  }

   public setName(name :string) {
    this.text = name;
  }
}

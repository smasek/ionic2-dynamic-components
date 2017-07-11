import { IProduct } from './../IProduct';
import { Component } from '@angular/core';


/**
 * Generated class for the Com2 component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'com-2',
  templateUrl: 'com-2.html'
})
export class Com2 implements IProduct {

  text: string;

  constructor() {
    console.log('Hello Com2 Component');
    this.text = 'Hello World form com-2' ;
  }

  public setName(name :string) {
    this.text = name;
  }
}

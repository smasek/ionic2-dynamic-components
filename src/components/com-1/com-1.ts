import { IProduct } from './../IProduct';
import { Component } from '@angular/core';


/**
 * Generated class for the Com1 component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'com-1',
  templateUrl: 'com-1.html'
})
export class Com1 implements IProduct {

  text: string;

  constructor() {
    console.log('Hello Com1 Component');
    this.text = 'Hello World form com-1' ;
  }

  public setName(name :string) {
    this.text = name;
  }
}

import { Com2 } from './../../components/com-2/com-2';
import { Com3 } from './../../components/com-3/com-3';
import { Com1 } from './../../components/com-1/com-1';
import { IProduct } from './../../components/IProduct';

import { Type, Component, ViewChild ,ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  entryComponents: [
    Com1, Com2, Com3
  ]
})
export class HomePage{

  @ViewChild("demo", {read: ViewContainerRef}) demo :ViewContainerRef = null;

  neuesFeld: number = 1;

  constructor(private  resolver: ComponentFactoryResolver) {
  }

  public add()  {
    console.log("add: "  + this.neuesFeld);

    let compClassName = "Com" + this.neuesFeld;

    const factories = Array.from(this.resolver['_factories'].keys());

    factories.forEach((x:any) =>  console.log("factory " + x.name));

    debugger;
    const factoryClass = <Type<IProduct>>factories.find((x: any) => x.name === compClassName);
    const factory = this.resolver.resolveComponentFactory(factoryClass);
    let createdComponent  = this.demo.createComponent(factory);
    createdComponent.instance.setName("Sascha: " + compClassName);
  }

  
} 

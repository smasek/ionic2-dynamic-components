import { IProduct } from './../../components/IProduct';

import { Type, Component, ViewChild ,ViewContainerRef, ComponentFactoryResolver} from '@angular/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

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

    debugger;
    const factoryClass = <Type<IProduct>>factories.find((x: any) => x.name === compClassName);
    const factory = this.resolver.resolveComponentFactory(factoryClass);
    let createdComponent  = this.demo.createComponent(factory);
    createdComponent.instance.setName("Sascha: " + compClassName);
  }

  
} 

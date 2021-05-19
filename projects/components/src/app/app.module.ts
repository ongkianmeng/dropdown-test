import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

import { CommonModule } from './common/common.module';
import { MatSelectVirtualScrollComponent } from './components/mat-select-virtual-scroll/mat-select-virtual-scroll.component';
import { NgSelectVirtualScrollComponent } from './components/ng-select-virtual-scroll/ng-select-virtual-scroll.component';


@NgModule({
  imports: [
    CommonModule
  ],
})
export class AppModule {
  constructor(private injector: Injector) {
    this._defineCustomElement('app-ng-select', NgSelectVirtualScrollComponent, injector);
    this._defineCustomElement('app-mat-select', MatSelectVirtualScrollComponent, injector);
  }

  ngDoBootstrap() { }

  private _defineCustomElement(name, component, injector) {
    const strategyFactory = new ElementZoneStrategyFactory(component, injector);
    const webComponent = createCustomElement(component, { injector, strategyFactory });
    customElements.define(name, webComponent);
  }
}



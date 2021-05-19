import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ng-select-virtual-scroll',
  templateUrl: './ng-select-virtual-scroll.component.html',
  styleUrls: ['./ng-select-virtual-scroll.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class NgSelectVirtualScrollComponent {

  @Input() data: any[];

  @Input() labelProp: string;
  
  @Input() placeholder: string;

}

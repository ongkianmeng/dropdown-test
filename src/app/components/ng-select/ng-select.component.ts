import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ng-select',
  templateUrl: './ng-select.component.html',
  styleUrls: ['./ng-select.component.scss']
})

export class NgSelectComponent {

  @Input() data: any[];

  @Input() labelProp: string;
  
  @Input() placeholder: string;

}

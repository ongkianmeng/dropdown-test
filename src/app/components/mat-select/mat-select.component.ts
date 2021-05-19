import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mat-select',
  templateUrl: './mat-select.component.html',
  styleUrls: ['./mat-select.component.scss'],
})
export class MatSelectComponent {

  @Input() data: any[];

  @Input() labelProp: string;

  @Input() placeholder: string;

  selected: any;

  onSelectionChange(change): void {
    if (!change.isUserInput) {
      return;
    }
    this.selected = change.source.value;
  }

}

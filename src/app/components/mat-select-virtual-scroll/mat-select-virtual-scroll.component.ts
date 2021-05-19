import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mat-select-virtual-scroll',
  templateUrl: './mat-select-virtual-scroll.component.html',
  styleUrls: ['./mat-select-virtual-scroll.component.scss']
})

export class MatSelectVirtualScrollComponent {

  @Input() data: any[];

  @Input() labelProp: string;
  
  @Input() placeholder: string;

  @ViewChild(CdkVirtualScrollViewport, { static: true })
  cdkVirtualScrollViewPort: CdkVirtualScrollViewport;

  selected: string;
  selectedIndex = 0;

  openChange($event: boolean) {
    if ($event) {
      this.cdkVirtualScrollViewPort.scrollToIndex(this.selectedIndex);
      this.cdkVirtualScrollViewPort.checkViewportSize();
    }
  }

  onSelectionChange(change): void {
    if (!change.isUserInput) {
      return;
    } 
    this.selected = change.source.value;
    this.selectedIndex = this.data.indexOf(this.selected);
  }

}

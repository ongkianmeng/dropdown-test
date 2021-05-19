import { Component, ViewEncapsulation } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  items: any[] = [];
  
  sampleData: any[] = [];

  labelprop = 'title'

  placeholder = 'Please Select';

  constructor(private _appService: AppService) {
    this.items = this._appService.getObjectData();

    this.sampleData = this.items.slice(0,5);
  }
}

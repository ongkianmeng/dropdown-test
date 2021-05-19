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

  data: any[] = [];
  
  sampleData: any[] = [];

  labelProp = 'title'

  placeholder = 'Please Select';

  constructor(private _appService: AppService) {
    this.data = this._appService.getObjectData();

    this.sampleData = this.data.slice(0,5);
  }
}

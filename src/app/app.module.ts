import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatRadioModule } from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSelectComponent } from './components/ng-select/ng-select.component';
import { MatSelectComponent } from './components/mat-select/mat-select.component';
import { MatSelectVirtualScrollComponent } from './components/mat-select-virtual-scroll/mat-select-virtual-scroll.component';
import { NgSelectVirtualScrollComponent } from './components/ng-select-virtual-scroll/ng-select-virtual-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    NgSelectComponent,
    MatSelectComponent,
    MatSelectVirtualScrollComponent,
    NgSelectVirtualScrollComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgSelectModule,
    FormsModule,
    MatSelectModule,
    ScrollingModule,
    BrowserAnimationsModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

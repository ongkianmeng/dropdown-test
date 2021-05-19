import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';

import { MatSelectVirtualScrollComponent } from '../components/mat-select-virtual-scroll/mat-select-virtual-scroll.component';
import { MatSelectComponent } from '../components/mat-select/mat-select.component';
import { NgSelectVirtualScrollComponent } from '../components/ng-select-virtual-scroll/ng-select-virtual-scroll.component';
import { NgSelectComponent } from '../components/ng-select/ng-select.component';

const COMPONENTS = [
    MatSelectComponent,
    MatSelectVirtualScrollComponent,
    NgSelectComponent,
    NgSelectVirtualScrollComponent,
];

const MODULES = [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    NgSelectModule,
    ScrollingModule,
]

@NgModule({
    declarations: [
        COMPONENTS
    ],
    entryComponents: [
        COMPONENTS
    ],
    imports: [
        MODULES
    ],
    exports: [
        COMPONENTS,
        MODULES,
    ]
})

export class CommonModule { }
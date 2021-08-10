import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgChartjsModule } from 'ng-chartjs';
import * as ChartAnnotation from 'chartjs-plugin-annotation';
const chartAnnotation = ChartAnnotation;

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    NgChartjsModule.registerPlugin([chartAnnotation]),
   ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

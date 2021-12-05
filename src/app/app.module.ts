import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { ContainerComponent } from './components/container/container.component';
import { GridComponent } from './components/grid/grid.component';
import { GanttComponent } from './components/gantt/gantt.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    GridComponent,
    GanttComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    GanttModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

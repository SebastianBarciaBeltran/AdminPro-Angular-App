import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafic1Component } from './grafic1/grafic1.component';
import { MainPagesComponent } from './main-pages/main-pages.component';

@NgModule({
  declarations: [
    NotfoundComponent,
    DashboardComponent,
    ProgressComponent,
    Grafic1Component,
    MainPagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ],
  exports: [
    NotfoundComponent
  ]
})
export class PagesModule { }

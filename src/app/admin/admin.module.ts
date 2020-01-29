import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {DashboardComponent} from './dashboard/dashboard.component'
import {MatSortModule , MatTableModule , MatPaginatorModule , MatTabsModule} from '@angular/material'
import {AgmCoreModule} from '@agm/core'
import {HttpClientModule} from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    
  } from '@angular/material';
import { AdminRoutes } from './admin.routing';
import { OrdersComponent } from './orders/orders.component';
import { WeeklyScheduleComponent } from './weekly-schedule/weekly-schedule.component';
import { TimeSlotComponent } from './time-slot/time-slot.component';
import { InstallationComponent } from './installation/installation.component';
import { AreaComponent } from './area/area.component';


  @NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(AdminRoutes),
      AgmCoreModule.forRoot({
        // please get your own API key here:
        // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
        apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
      }),
      FormsModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatRippleModule,
     
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatTooltipModule,
      MatSortModule,
      MatTableModule,
      MatPaginatorModule,
      MatTabsModule,
      DataTablesModule
    ],
    declarations: [
        DashboardComponent,
        OrdersComponent,
        WeeklyScheduleComponent,
        TimeSlotComponent,
        InstallationComponent,
        AreaComponent,
        
    ]
  })
export class AdminModule { }
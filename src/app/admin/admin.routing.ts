import { Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {OrdersComponent} from './orders/orders.component';
import { WeeklyScheduleComponent } from './weekly-schedule/weekly-schedule.component';
import { TimeSlotComponent } from './time-slot/time-slot.component';
import { AreaComponent } from './area/area.component';
import { InstallationComponent } from './installation/installation.component';

export const AdminRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'orders',   component: OrdersComponent },
    { path: 'weeklySchedule',   component: WeeklyScheduleComponent },
    { path: 'area',   component: AreaComponent },

    { path: 'timeSlot',   component: TimeSlotComponent },
    { path: 'installation',   component: InstallationComponent },

    // { path: 'table-list',     component: TableListComponent },
   
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
];

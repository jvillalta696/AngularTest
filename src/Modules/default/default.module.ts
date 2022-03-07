import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';



@NgModule({
  declarations: [
    NavComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardModule,
    DashboardRoutingModule
  ],
  exports:[
    NavComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent
  ]
})
export class DefaultModule { }

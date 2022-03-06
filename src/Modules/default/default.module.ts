import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    NavComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent
  ]
})
export class DefaultModule { }

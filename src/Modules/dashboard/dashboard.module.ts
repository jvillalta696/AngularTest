import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    StartComponent,
    AboutUsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StartComponent,
    AboutUsComponent,
    ContactComponent
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from 'src/Modules/dashboard/about-us/about-us.component';
import { ContactComponent } from 'src/Modules/dashboard/contact/contact.component';
import { StartComponent } from 'src/Modules/dashboard/start/start.component';

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

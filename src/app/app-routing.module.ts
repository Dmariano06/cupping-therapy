import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

const routes: Routes = [
  {path:"home", component: AppComponent},
  {path: '', redirectTo:"home", pathMatch: 'full'},
  {path:"datepicker", component: DatepickerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }

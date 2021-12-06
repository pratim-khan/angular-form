import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDataComponent } from './form-data/form-data.component';
import { SubmittedComponent } from './submitted/submitted.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'form'},
  {path:'form',component:FormDataComponent},
  {path:'submitted',component:SubmittedComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

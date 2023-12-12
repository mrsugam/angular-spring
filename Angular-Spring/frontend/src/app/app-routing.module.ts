import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpListComponent } from './features/emp-list/emp-list.component';
import { AddEmpComponent } from './features/add-emp/add-emp.component';
import { EmpDetailsComponent } from './features/emp-details/emp-details.component';

export const routes: Routes = [
  {path: '', redirectTo: 'emp-list', pathMatch: 'full'},
  {path: 'emp-list', component: EmpListComponent},
  {path: 'add-emp', component: AddEmpComponent},
  {path: 'update/:id', component: AddEmpComponent},
  {path: 'emp-details/:id', component: EmpDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

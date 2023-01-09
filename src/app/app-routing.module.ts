import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './components/department/department/department.component';
import { EmployeeComponent } from './components/employee/employee/employee.component';
import { EnterpriseComponent } from './components/enterprise/enterprise.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home/enterprise',
    component: EnterpriseComponent,
    
    pathMatch: 'full'
  },
  {
    path: 'home/employee',
    component: EmployeeComponent,
    
    pathMatch: 'full'
  },
  {
    path: 'home/department',
    component: DepartmentComponent,
    
    pathMatch: 'full'
  }
  // {
  //   path: '',
  //   component: MainComponent,
  //   children: [
  //     {
  //       path: 'home',
  //       loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
  //     }
  //   ]
  // },
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

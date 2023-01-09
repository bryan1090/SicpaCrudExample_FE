import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/enterprise/create/create.component';
import { EnterpriseComponent } from './components/enterprise/enterprise.component';

import { EnterpriseCreateComponent } from './components/enterprise/create/enterprise-create/enterprise-create.component';
import { EnterpriseDeleteComponent } from './components/enterprise/delete/enterprise-delete/enterprise-delete.component';
import { EnterpriseListComponent } from './components/enterprise/list/enterprise-list/enterprise-list.component';
import { EnterpriseUpdateComponent } from './components/enterprise/update/enterprise-update/enterprise-update.component';
import { EmployeeListComponent } from './components/employee/list/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './components/employee/create/employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './components/employee/update/employee-update/employee-update.component';
import { EmployeeDeleteComponent } from './components/employee/delete/employee-delete/employee-delete.component';
import { DepartmentListComponent } from './components/department/list/department-list/department-list.component';
import { DepartmentCreateComponent } from './components/department/create/department-create/department-create.component';
import { DepartmentUpdateComponent } from './components/department/update/department-update/department-update.component';
import { DepartmentDeleteComponent } from './components/department/delete/department-delete/department-delete.component';
import { DepartmentComponent } from './components/department/department/department.component';
import { EmployeeComponent } from './components/employee/employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    EnterpriseComponent,
    EnterpriseCreateComponent,
    EnterpriseDeleteComponent,
    EnterpriseListComponent,
    EnterpriseUpdateComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeUpdateComponent,
    EmployeeDeleteComponent,
    DepartmentListComponent,
    DepartmentCreateComponent,
    DepartmentUpdateComponent,
    DepartmentDeleteComponent,
    DepartmentComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

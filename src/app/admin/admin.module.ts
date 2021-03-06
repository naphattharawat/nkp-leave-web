import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { DepartmentComponent } from './department/department.component';
import { UsersComponent } from './users/users.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeTypeComponent } from './employee-type/employee-type.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { AdminModalsModule } from './modals/admin-modals.module';

@NgModule({
  declarations: [
    LayoutComponent,
    DepartmentComponent,
    UsersComponent,
    EmployeeTypeComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    AdminModalsModule
  ]
})
export class AdminModule { }

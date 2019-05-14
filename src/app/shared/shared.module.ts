import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { DepartmentService } from './services/department.service';

@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent
  ],
  providers: [
    DepartmentService
  ]
})
export class SharedModule {
}

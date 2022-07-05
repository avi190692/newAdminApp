import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementPage } from './user-management.page';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserManagementPage
      }
    ])
  ]
})
export class UserManagementPageModule { }
function declarations(arg0: { declarations: undefined[]; imports: any[]; }, declarations: any, arg2: (typeof UserManagementPage)[]) {
  throw new Error('Function not implemented.');
}


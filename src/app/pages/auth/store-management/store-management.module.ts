import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreManagementPage } from './store-management.page';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: StoreManagementPage
      }
    ])
  ]
})
export class StoreManagementPageModule { }
function declarations(arg0: { declarations: undefined[]; imports: any[]; }, declarations: any, arg2: (typeof StoreManagementPage)[]) {
  throw new Error('Function not implemented.');
}


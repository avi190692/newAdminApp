import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderManagementPage } from './order-management.page';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrderManagementPage
      }
    ])
  ]
})
export class OrderManagementPageModule { }
function declarations(arg0: { declarations: undefined[]; imports: any[]; }, declarations: any, arg2: (typeof OrderManagementPage)[]) {
  throw new Error('Function not implemented.');
}


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPage } from './customer.page';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild([
        {
          path: '',
          component: CustomerPage
        }
      ])
    ]
  })
  export class CustomerPageModule { }
  function declarations(arg0: { declarations: undefined[]; imports: any[]; }, declarations: any, arg2: (typeof CustomerPage)[]) {
    throw new Error('Function not implemented.');
  }
  
  
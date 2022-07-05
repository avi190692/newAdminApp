import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingPage } from './shipping.page';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShippingPage
      }
    ])
  ]
})
export class ShippingPageModule { }
function declarations(arg0: { declarations: undefined[]; imports: any[]; }, declarations: any, arg2: (typeof ShippingPage)[]) {
  throw new Error('Function not implemented.');
}


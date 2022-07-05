import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalougePage } from './catalouge.page';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CatalougePage
      }
    ])
  ]
})
export class CatalougePageModule { }
function declarations(arg0: { declarations: undefined[]; imports: any[]; }, declarations: any, arg2: (typeof CatalougePage)[]) {
  throw new Error('Function not implemented.');
}


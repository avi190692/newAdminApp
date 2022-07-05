import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ]
})
export class HomeModule { }
function declarations(arg0: { declarations: undefined[]; imports: any[]; }, declarations: any, arg2: (typeof HomePage)[]) {
  throw new Error('Function not implemented.');
}


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPage } from './content.page';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContentPage
      }
    ])
  ]
})
export class ContentPageModule { }
function declarations(arg0: { declarations: undefined[]; imports: any[]; }, declarations: any, arg2: (typeof ContentPage)[]) {
  throw new Error('Function not implemented.');
}


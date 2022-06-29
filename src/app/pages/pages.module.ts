import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    IonicModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
                                                          
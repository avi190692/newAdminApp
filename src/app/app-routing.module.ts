import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'; 
import { AuthGuard } from'./services/auth.guard';

const routes: Routes = [
  { 
    path: '', redirectTo: 'pages', pathMatch: 'full' 
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) 
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/auth/home/home.module').then(m => m.HomeModule) 
  },
  {
    path:'list',
    loadChildren: () => import('./pages/auth/list/list.module').then(m => m.ListModule)
  },
  {
    path:'login',
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path:'order',
    loadChildren: () => import('./pages/auth/order/order.module').then(m => m.OrderPageModule)
  },
  {
    path:'content',
    loadChildren: () => import('./pages/auth/content/content.module').then(m => m.ContentPageModule)

  },
  {
    path:'customer',
    loadChildren: () => import('./pages/auth/customer/customer.module').then(m => m.CustomerPageModule)

  },
  {
    path:'catalouge',
    loadChildren: () => import('./pages/auth/catalouge/catalouge.module').then(m => m.CatalougePageModule)

  },
  {
    path:'shipping',
    loadChildren: () => import('./pages/auth/shipping/shipping.module').then(m => m.ShippingPageModule)

  },
  {
    path:'store-management',
    loadChildren: () => import('./pages/auth/store-management/store-management.module').then(m => m.StoreManagementPageModule)
  },
  {
    path:'user-management',
    loadChildren: () => import('./pages/auth/user-management/user-management.module').then(m => m.UserManagementPageModule)

  },
  {
    path:'order-management',
    loadChildren: () => import('./pages/auth/order-management/order-management.module').then(m => m.OrderManagementPageModule)

  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

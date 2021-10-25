import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import { InvoiceDataComponent } from './invoice-data/invoice-data.component';
import { DownloadInvoiceeComponent } from './download-invoicee/download-invoicee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GoogleLoginComponent } from './components/google-login/google-login.component';

const routes: Routes = [
  // {
  //   path: '', redirectTo : 'create-invoice', pathMatch:'full'
  // },
  // {path:'home', component:CreateInvoiceComponent},
  {
    path: 'create-invoice',
    component: CreateInvoiceComponent
  },
  {
    path: '',
    component: SocialLoginComponent
  },
  {
    path: 'invoice-data',
    component: InvoiceDataComponent
  },
  {
    path: 'download-invoice',
    component: DownloadInvoiceeComponent
  },
  {path:'googlelogins', component:GoogleLoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

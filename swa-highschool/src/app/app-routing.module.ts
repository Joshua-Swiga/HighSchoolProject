import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NaviagtionComponent } from './naviagtion/naviagtion.component';

const routes: Routes = [
  {path: '', redirectTo: 'landing-page', pathMatch: 'full'},
  { path: 'landing-page', component: LandingPageComponent},
  { path: 'about-us', component:AboutUsComponent },
  {path: 'contact-us', component: ContactUsComponent},
  { path: 'navigation', component: NaviagtionComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

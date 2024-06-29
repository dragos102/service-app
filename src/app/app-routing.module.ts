import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ServicesComponent } from './services/services.component';
import { PhotosComponent } from './photos/photos.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'photos',
    component: PhotosComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    redirectTo: 'homepage'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

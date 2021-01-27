import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { AboutComponent } from './about/about.component';

// Membuat routing dengan 5 bagian: home, details, create, update, about
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user/:id', component: DetailsComponent }, 
  { path: 'create', component: CreateComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'update/:id', component: UpdateDetailsComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

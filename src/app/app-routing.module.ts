import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { FavhomeComponent } from './components/favhome/favhome.component';
import { ErrorComponent } from './components/error/error.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: UserhomeComponent, canActivate: [AuthGuard] },
  { path: 'favourites', component: FavhomeComponent, canActivate: [AuthGuard] },
  { path: '**', component: ErrorComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

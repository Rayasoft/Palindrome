import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import {PalindromeComponent} from './components/palindrome/palindrome.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'palindrome',
    component: PalindromeComponent
  },
  { path: '', redirectTo: 'palindrome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocsComponent } from './core/docs/docs.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'bingo/new'
  },
  {
    path: 'bingo',
    loadChildren: 'app/bingo/bingo.module#BingoModule'
  },
  {
    path: 'docs',
    component: DocsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

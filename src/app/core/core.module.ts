import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { DocsComponent } from './docs/docs.component';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'angular2-markdown';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule
  ],
  declarations: [
    LayoutComponent,
    TopNavComponent,
    DocsComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule { }

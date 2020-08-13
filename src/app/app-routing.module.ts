import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SecondaryComponent } from './secondary/secondary.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'secondary',
    component: SecondaryComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}

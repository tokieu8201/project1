import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAngularSharedModule } from 'projects/angular/src/app/app.module';
import { AppNgrxPlotlySharedModule } from 'projects/ngrx-plotly/src/app/app.module';
import { AppNgrxSharedModule } from 'projects/ngrx/src/app/app.module';
import { AppPlotlyRealtimeSharedModule } from 'projects/plotly-realtime/src/app/app.module';
import { AppPrimengSharedModule } from 'projects/primeng/src/app/app.module';

const routes: Routes = [
  {
    path: 'appAngular',
    loadChildren: () =>
      import('projects/angular/src/app/app.module').then(
        (module) => module.AppAngularSharedModule
      ),
  },
  {
    path: 'appNgrx',
    loadChildren: () =>
      import('projects/ngrx/src/app/app.module').then(
        (module) => module.AppNgrxSharedModule
      ),
  },
  {
    path: 'appPlotlyRealtime',
    loadChildren: () =>
      import('projects/plotly-realtime/src/app/app.module').then(
        (module) => module.AppPlotlyRealtimeSharedModule
      ),
  },
  {
    path: 'appNgrxPlotly',
    loadChildren: () =>
      import('projects/ngrx-plotly/src/app/app.module').then(
        (module) => module.AppNgrxPlotlySharedModule
      ),
  },
  {
    path: 'appPrimeng',
    loadChildren: () =>
      import('projects/primeng/src/app/app.module').then(
        (module) => module.AppPrimengSharedModule
      ),
  },
  {
    path: '',
    redirectTo: 'appPrimeng',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AppAngularSharedModule.forRoot(),
    AppNgrxSharedModule.forRoot(),
    AppNgrxPlotlySharedModule.forRoot(),
    AppPrimengSharedModule.forRoot(),
    AppPlotlyRealtimeSharedModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

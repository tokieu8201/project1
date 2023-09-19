import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPrimengSharedModule } from 'projects/primeng/src/app/app.module';
import { HeaderComponent } from './header/header/header.component';
import { AppNgrxSharedModule } from 'projects/ngrx/src/app/app.module';
import { StoreModule } from '@ngrx/store';
import { postReducer } from 'projects/ngrx/src/app/state/post.reducer';
import { AppNgrxPlotlySharedModule } from 'projects/ngrx-plotly/src/app/app.module';
import { productReducer } from 'projects/ngrx-plotly/src/app/state/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from 'projects/ngrx-plotly/src/app/state/product.effects';
import { ticketReducer } from 'projects/primeng/src/app/state/ticket.reducer';
import { TicketEffects } from 'projects/primeng/src/app/state/ticket.effect';
import { AppAngularSharedModule } from 'projects/angular/src/app/app.module';
import { AppPlotlyRealtimeSharedModule } from 'projects/plotly-realtime/src/app/app.module';

PlotlyModule.plotlyjs = PlotlyJS;


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlotlyModule,
    AppAngularSharedModule.forRoot(),
    AppNgrxSharedModule.forRoot(),
    AppPrimengSharedModule.forRoot(),
    AppPlotlyRealtimeSharedModule.forRoot(),
    AppNgrxPlotlySharedModule.forRoot(),
    StoreModule.forRoot({ posts: postReducer, products: productReducer, tickets: ticketReducer}),
    EffectsModule.forRoot([ProductEffects, TicketEffects]),
    // EffectsModule.forRoot([TicketEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

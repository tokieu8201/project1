import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { productReducer } from './state/product.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './state/product.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ProductChartComponent } from './component/product-chart/product-chart.component';
import { UpdateProductComponent } from './component/update-product/update-product.component';
import { ListProductComponent } from './component/list-product/list-product.component';

PlotlyModule.plotlyjs = PlotlyJS;
const providers: any[] = [];

@NgModule({
  declarations: [
    AppComponent,
    ProductChartComponent,
    UpdateProductComponent,
    ListProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlotlyModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ products: productReducer}),
    EffectsModule.forRoot([ProductEffects]),
    TableModule,
    ButtonModule
  ],
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class AppNgrxPlotlySharedModule{
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}
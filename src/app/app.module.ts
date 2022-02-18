import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FeaturetwoComponent } from './featuretwo/featuretwo.component';

import { FeatureoneComponent } from './featureone/featureone.component';


@NgModule({
  declarations: [
    AppComponent,

    FeaturetwoComponent,

    FeatureoneComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

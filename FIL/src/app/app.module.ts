import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilTableComponent } from './components/fil-table/fil-table.component';
import { FilDialogComponent } from './components/fil-dialog/fil-dialog.component';
import { FilTooltipComponent } from './components/fil-tooltip/fil-tooltip.component';
import { FilCardComponent } from './components/fil-card/fil-card.component';
import { BannerComponent } from './components/fil-banner/banner.component';
import { FilHeaderComponent } from './components/fil-header/fil-header.component';

@NgModule({
  declarations: [
    AppComponent,
    FilTableComponent,
    FilDialogComponent,
    FilTooltipComponent,
    FilCardComponent,
    BannerComponent,
    FilHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilTableComponent } from './components/fil-table/fil-table.component';
import { FilDialogComponent } from './components/fil-dialog/fil-dialog.component';
import { FilTooltipComponent } from './components/fil-tooltip/fil-tooltip.component';
import { FilCardComponent } from './components/fil-card/fil-card.component';
import { BannerComponent } from './components/fil-banner/banner.component';
import { FilHeaderComponent } from './components/fil-header/fil-header.component';
import { TableEditComponent } from './components/fil-table/table-edit/table-edit.component';

import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    FilTableComponent,
    FilDialogComponent,
    FilTooltipComponent,
    FilCardComponent,
    BannerComponent,
    FilHeaderComponent,
    TableEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[TableEditComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componenets/header/header.component';
import { FooterComponent } from './componenets/footer/footer.component';
import { SimpleComponent } from './layouts/simple/simple.component';
import { Grid1Component } from './pages/grid1/grid1.component';
import { Grid2Component } from './pages/grid2/grid2.component';
import { Grid3Component } from './pages/grid3/grid3.component';
import { Grid4Component } from './pages/grid4/grid4.component';


import { HttpClientModule } from "@angular/common/http";

import { 
	IgxAvatarModule,
	IgxBadgeModule,
	IgxButtonModule,
	IgxFocusModule,
	IgxGridModule,
	IgxIconModule,
	IgxInputGroupModule,
	IgxProgressBarModule,
	IgxRippleModule,
	IgxSwitchModule
 } from "igniteui-angular";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SimpleComponent,
    Grid1Component,
    Grid2Component,
    Grid3Component,
    Grid4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonModule,
    IgxGridModule,
    IgxFocusModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxProgressBarModule,
    IgxRippleModule,
    IgxSwitchModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { ProductComponent } from './pages/product/product.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    //DashboardComponent,
    NopagesfoundComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    //ProductComponent,
    //CatalogueComponent,
    //PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

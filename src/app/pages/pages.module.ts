import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { PagesComponent } from './pages.component';




@NgModule({
    declarations: [
        DashboardComponent,
        ProductComponent,
        CatalogueComponent,
        PagesComponent,
    ],
    exports: [
        DashboardComponent,
        ProductComponent,
        CatalogueComponent,
        PagesComponent,
    ],
    imports: [CommonModule,
      SharedModule,
      RouterModule
      ]
      })
      export class PagesModule { }

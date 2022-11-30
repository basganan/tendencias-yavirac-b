import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { AuthRoutingModule } from './pages/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
const routes: Routes = [
{ path: '**', component: NopagesfoundComponent },
];
@NgModule({
declarations: [],
imports: [
RouterModule.forRoot(routes),
PagesRoutingModule,
AuthRoutingModule,
],
exports: [RouterModule]
})
export class AppRoutingModule { }

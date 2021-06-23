import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from "./search/search.component";
import {CardComponent} from "./card/card.component";
import {FullCardComponent} from "./full-card/full-card.component";
import {CityListComponent} from "./city-list/city-list.component";

const routes: Routes = [
  {path: 'cityList', component: CityListComponent},
  { path: '', redirectTo: '/cityList', pathMatch: 'full' },
  {path: 'city/:city', component: CardComponent},
  {path: 'info/:city', component: FullCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

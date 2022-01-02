import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalerieComponent} from "./galerie/galerie.component";
import { KontaktComponent} from "./kontakt/kontakt.component";
import { UvodComponent } from "./uvod/uvod.component";
import { VyrobkyComponent } from "./vyrobky/vyrobky.component";

const routes: Routes = [
  {path: "uvod", component: UvodComponent},
  {path: "vyrobky", component: VyrobkyComponent},
  {path: "kontakt", component: KontaktComponent},
  {path: "vyrobky/:id", component: GalerieComponent},
  {path: "", redirectTo: "uvod", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

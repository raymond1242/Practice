import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component'
import { MapsComponent } from './components/maps/maps.component'
import { LandingComponent } from './components/landing/landing.component'
import { KitEquipmentComponent } from './components/kit-equipment/kit-equipment.component'

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'maps',
    component: MapsComponent,
  },
  {
    path: 'counter',
    component: KitEquipmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

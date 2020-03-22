import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component'
import { MapsComponent } from './components/maps/maps.component'


const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
  {
    path: 'forms',
    component: FormComponent,
  },
  {
    path: 'maps',
    component: MapsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

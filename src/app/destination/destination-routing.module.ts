import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DestinationsComponent } from './destinations/destinations.component'
import { MoonComponent } from './moon/moon.component'
import { MarsComponent } from './mars/mars.component'
import { EuropaComponent } from './europa/europa.component'
import { TitanComponent } from './titan/titan.component'

const routes: Routes = [
  {
    path: '',
    component: DestinationsComponent,
    children: [
      {
        path: '',
        component: MoonComponent
      },
      {
        path: 'mars',
        component: MarsComponent
      },
      {
        path: 'europa',
        component: EuropaComponent
      },
      {
        path: 'titan',
        component: TitanComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationRoutingModule {}

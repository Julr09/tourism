import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CrewComponent } from './crew/crew.component'
import { MSComponent } from './ms/ms.component'
import { CEComponent } from './ce/ce.component'
import { PilotComponent } from './pilot/pilot.component'
import { ComanderComponent } from './comander/comander.component'

const routes: Routes = [
  {
    path: '',
    component: CrewComponent,
    children: [
      {
        path: '',
        component: ComanderComponent
      },
      {
        path: 'mission-specialist',
        component: MSComponent
      },
      {
        path: 'crew-engineer',
        component: CEComponent
      },
      {
        path: 'pilot',
        component: PilotComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrewRoutingModule {}

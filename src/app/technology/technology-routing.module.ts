import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TechComponent } from './tech/tech.component'
import { LaunchVehicleComponent } from './launch-vehicle/launch-vehicle.component'
import { SpaceportComponent } from './spaceport/spaceport.component'
import { SpaceCapsuleComponent } from './space-capsule/space-capsule.component'

const routes: Routes = [
  {
    path: '',
    component: TechComponent,
    children: [
      {
        path: '',
        component: LaunchVehicleComponent
      },
      {
        path: 'spaceport',
        component: SpaceportComponent
      },
      {
        path: 'space-capsule',
        component: SpaceCapsuleComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologyRoutingModule {}

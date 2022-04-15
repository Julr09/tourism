import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TechnologyRoutingModule } from './technology-routing.module'
import { TechComponent } from './tech/tech.component'
import { TechReuseComponent } from './tech-reuse/tech-reuse.component'
import { SpaceportComponent } from './spaceport/spaceport.component'
import { SpaceCapsuleComponent } from './space-capsule/space-capsule.component'
import { LaunchVehicleComponent } from './launch-vehicle/launch-vehicle.component'

@NgModule({
  declarations: [
    TechComponent,
    TechReuseComponent,
    SpaceportComponent,
    SpaceCapsuleComponent,
    LaunchVehicleComponent
  ],
  imports: [CommonModule, TechnologyRoutingModule]
})
export class TechnologyModule {}

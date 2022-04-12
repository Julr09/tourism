import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DestinationRoutingModule } from './destination-routing.module'
import { DestinationsComponent } from './destinations/destinations.component'
import { SharedModule } from '../shared/shared.module';
import { MoonsComponent } from './moons/moons.component';
import { MoonComponent } from './moon/moon.component';
import { MarsComponent } from './mars/mars.component';
import { EuropaComponent } from './europa/europa.component';
import { TitanComponent } from './titan/titan.component'

@NgModule({
  declarations: [DestinationsComponent, MoonsComponent, MoonComponent, MarsComponent, EuropaComponent, TitanComponent],
  imports: [CommonModule, DestinationRoutingModule, SharedModule]
})
export class DestinationModule {}

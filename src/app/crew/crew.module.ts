import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrewRoutingModule } from './crew-routing.module';
import { CrewComponent } from './crew/crew.component';
import { CrewReUseComponent } from './crew-re-use/crew-re-use.component';
import { ComanderComponent } from './comander/comander.component';
import { MSComponent } from './ms/ms.component';
import { CEComponent } from './ce/ce.component';
import { PilotComponent } from './pilot/pilot.component';


@NgModule({
  declarations: [
    CrewComponent,
    CrewReUseComponent,
    ComanderComponent,
    MSComponent,
    CEComponent,
    PilotComponent
  ],
  imports: [
    CommonModule,
    CrewRoutingModule
  ]
})
export class CrewModule { }

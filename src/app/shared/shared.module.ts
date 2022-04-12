import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TabsContainerComponent } from './tabs-container/tabs-container.component'
import { TabsComponent } from './tabs/tabs.component'

@NgModule({
  declarations: [TabsContainerComponent, TabsComponent],
  imports: [CommonModule],
  exports: [TabsContainerComponent, TabsComponent]
})
export class SharedModule {}

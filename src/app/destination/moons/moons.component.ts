import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-moons',
  templateUrl: './moons.component.html',
  styleUrls: ['./moons.component.css']
})
export class MoonsComponent {
  @Input() name = ''
  @Input() description = ''
  @Input() distance = ''
  @Input() travel = ''
  @Input() image = ''
}

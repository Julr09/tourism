import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-tech-reuse',
  templateUrl: './tech-reuse.component.html',
  styleUrls: ['./tech-reuse.component.css']
})
export class TechReuseComponent {
  @Input() vehicle = ''
  @Input() description = ''
  @Input() image = ''
  @Input() image2 = ''
}

import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-crew-re-use',
  templateUrl: './crew-re-use.component.html',
  styleUrls: ['./crew-re-use.component.css']
})
export class CrewReUseComponent {
  @Input() name = ''
  @Input() role = ''
  @Input() bio = ''
  @Input() image = ''
}

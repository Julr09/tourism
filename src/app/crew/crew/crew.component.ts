import { Component, OnDestroy } from '@angular/core'

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnDestroy {
  constructor() {
    document.body.classList.add('crew')
  }

  ngOnDestroy() {
    document.body.classList.remove('crew')
  }
}

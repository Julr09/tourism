import { Component, OnDestroy } from '@angular/core'

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnDestroy {
  constructor() {
    document.body.classList.add('destinations')
  }

  ngOnDestroy() {
    document.body.classList.remove('destinations')
  }
}

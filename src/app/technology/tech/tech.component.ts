import { Component, OnDestroy } from '@angular/core'

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnDestroy {
  constructor() {
    document.body.classList.add('tech')
  }

  ngOnDestroy() {
    document.body.classList.remove('tech')
  }
}

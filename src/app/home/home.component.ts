import { Component, OnDestroy } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  constructor() {
    document.body.classList.add('home')
  }

  ngOnDestroy() {
    document.body.classList.remove('home')
  }
}

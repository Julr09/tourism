import {Component, OnDestroy, OnInit} from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor() {
    document.body.classList.add('home')
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    document.body.classList.remove('home')
  }
}

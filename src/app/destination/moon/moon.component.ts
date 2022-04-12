import { Component, OnInit } from '@angular/core'
import data from '../../data/data.json'

@Component({
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.css']
})
export class MoonComponent implements OnInit {
  moon: any

  ngOnInit(): void {
    this.moon = data.destinations[0]
  }
}

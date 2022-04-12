import { Component, OnInit } from '@angular/core'
import data from '../../data/data.json'

@Component({
  selector: 'app-europa',
  templateUrl: './europa.component.html',
  styleUrls: ['./europa.component.css']
})
export class EuropaComponent implements OnInit {
  europa: any
  constructor() {}

  ngOnInit(): void {
    this.europa = data.destinations[2]
  }
}

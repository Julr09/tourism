import { Component, OnInit } from '@angular/core'
import data from '../../data/data.json'

@Component({
  selector: 'app-ms',
  templateUrl: './ms.component.html',
  styleUrls: ['./ms.component.css']
})
export class MSComponent implements OnInit {
  ms: any

  ngOnInit(): void {
    this.ms = data.crew[1]
  }
}

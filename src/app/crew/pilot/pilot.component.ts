import { Component, OnInit } from '@angular/core'
import data from '../../data/data.json'


@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.css']
})
export class PilotComponent implements OnInit {
  pilot: any
  ngOnInit(): void {
    this.pilot = data.crew[2]
  }
}

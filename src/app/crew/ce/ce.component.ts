import { Component, OnInit } from '@angular/core'
import data from '../../data/data.json'

@Component({
  selector: 'app-ce',
  templateUrl: './ce.component.html',
  styleUrls: ['./ce.component.css']
})
export class CEComponent implements OnInit {
  ce: any

  ngOnInit(): void {
    this.ce = data.crew[3]
  }
}

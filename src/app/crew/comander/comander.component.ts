import { Component, OnInit } from '@angular/core'
import data from '../../data/data.json'

@Component({
  selector: 'app-comander',
  templateUrl: './comander.component.html',
  styleUrls: ['./comander.component.css']
})
export class ComanderComponent implements OnInit {
  Commander: any

  ngOnInit(): void {
    this.Commander = data.crew[0]
  }
}

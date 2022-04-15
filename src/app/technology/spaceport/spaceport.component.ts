import { Component, OnInit } from '@angular/core'
import data from '../../data/data.json'

@Component({
  selector: 'app-spaceport',
  templateUrl: './spaceport.component.html',
  styleUrls: ['./spaceport.component.css']
})
export class SpaceportComponent implements OnInit {
  sp: any
  ngOnInit(): void {
    this.sp = data.technology[1]
  }
}

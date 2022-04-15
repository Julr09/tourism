import { Component, OnInit } from '@angular/core'
import data from '../../data/data.json'

@Component({
  selector: 'app-space-capsule',
  templateUrl: './space-capsule.component.html',
  styleUrls: ['./space-capsule.component.css']
})
export class SpaceCapsuleComponent implements OnInit {
  sc: any

  ngOnInit(): void {
    this.sc = data.technology[2]
  }
}

import { Component, OnInit } from '@angular/core'
import data from '../../data/data.json'

@Component({
  selector: 'app-launch-vehicle',
  templateUrl: './launch-vehicle.component.html',
  styleUrls: ['./launch-vehicle.component.css']
})
export class LaunchVehicleComponent implements OnInit {
  lv: any

  ngOnInit(): void {
    this.lv = data.technology[0]
  }
}

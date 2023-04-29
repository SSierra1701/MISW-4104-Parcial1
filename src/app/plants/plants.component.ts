import { Component, OnInit } from '@angular/core';
import { Plant } from './plant';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {
  private plants: Array<Plant> = []
  constructor() { }

  ngOnInit() {
  }

}

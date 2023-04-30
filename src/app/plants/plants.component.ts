import { Component, OnInit } from '@angular/core';
import { Plant } from './plant';
import { PlantService } from './plant.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {
  plants: Array<Plant> = []
  p_interior: number = 0
  p_exterior: number = 0
  constructor(private plantService: PlantService) { }

  getPlantsInfo(): void {
    this.plantService.getPlants().subscribe((plants) => {
      this.plants = plants;
      for(let my_plant_info of this.plants){
        if(my_plant_info.tipo == 'Interior'){
          this.p_interior += 1;
        }else{
          this.p_exterior += 1;
        }
      }
    });
  }

  ngOnInit() {
    this.getPlantsInfo();
  }

}


/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { PlantsComponent } from './plants.component';
import { HttpClientModule } from '@angular/common/http';
import { Plant } from './plant';
import { PlantService } from './plant.service';

describe('PlantsComponent', () => {
  let component: PlantsComponent;
  let fixture: ComponentFixture<PlantsComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantsComponent ],
      providers: [ PlantService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      var p_type = ''
      if (faker.datatype.number() % 2 == 0){
          p_type = 'Interior'
      }else{
        p_type = 'Exterior'
      }
      const plant = new Plant(
        faker.datatype.number(),
        faker.lorem.words(2),
        faker.lorem.words(4),
        p_type,
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.words(5)
      );
      console.log(plant)
      component.plants.push(plant);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 col headers', () => {
    expect(debug.queryAll(By.css('th'))).toHaveSize(4)
  });

  it('should have 3 rows plus 1 header row', () =>{
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4)
  });

});

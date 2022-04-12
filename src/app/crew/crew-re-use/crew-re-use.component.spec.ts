import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewReUseComponent } from './crew-re-use.component';

describe('CrewReUseComponent', () => {
  let component: CrewReUseComponent;
  let fixture: ComponentFixture<CrewReUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewReUseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewReUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

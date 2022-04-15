import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechReuseComponent } from './tech-reuse.component';

describe('TechReuseComponent', () => {
  let component: TechReuseComponent;
  let fixture: ComponentFixture<TechReuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechReuseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechReuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

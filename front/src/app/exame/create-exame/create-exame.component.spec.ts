import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExameComponent } from './create-exame.component';

describe('CreateExameComponent', () => {
  let component: CreateExameComponent;
  let fixture: ComponentFixture<CreateExameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

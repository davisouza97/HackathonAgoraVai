import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExameComponent } from './update-exame.component';

describe('UpdateExameComponent', () => {
  let component: UpdateExameComponent;
  let fixture: ComponentFixture<UpdateExameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateExameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

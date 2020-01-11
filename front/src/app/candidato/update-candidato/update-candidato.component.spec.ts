import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCandidatoComponent } from './update-candidato.component';

describe('UpdateCandidatoComponent', () => {
  let component: UpdateCandidatoComponent;
  let fixture: ComponentFixture<UpdateCandidatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCandidatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

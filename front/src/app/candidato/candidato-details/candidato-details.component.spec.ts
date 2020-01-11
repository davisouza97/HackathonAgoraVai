import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoDetailsComponent } from './candidato-details.component';

describe('CandidatoDetailsComponent', () => {
  let component: CandidatoDetailsComponent;
  let fixture: ComponentFixture<CandidatoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

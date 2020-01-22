import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoPersistComponent } from './candidato-persist.component';

describe('CreateCandidatoComponent', () => {
  let component: CandidatoPersistComponent;
  let fixture: ComponentFixture<CandidatoPersistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatoPersistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatoPersistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

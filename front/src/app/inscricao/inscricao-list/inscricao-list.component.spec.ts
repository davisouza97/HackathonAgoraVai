import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscricaoListComponent } from './inscricao-list.component';

describe('InscricaoListComponent', () => {
  let component: InscricaoListComponent;
  let fixture: ComponentFixture<InscricaoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscricaoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscricaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

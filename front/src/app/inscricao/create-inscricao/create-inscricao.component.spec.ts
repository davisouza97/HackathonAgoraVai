import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInscricaoComponent } from './create-inscricao.component';

describe('CreateInscricaoComponent', () => {
  let component: CreateInscricaoComponent;
  let fixture: ComponentFixture<CreateInscricaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInscricaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInscricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

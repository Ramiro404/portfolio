import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesTecnicasComponent } from './habilidades-tecnicas.component';

describe('HabilidadesTecnicasComponent', () => {
  let component: HabilidadesTecnicasComponent;
  let fixture: ComponentFixture<HabilidadesTecnicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabilidadesTecnicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadesTecnicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasManagerComponent } from './compras-manager.component';

describe('ComprasManagerComponent', () => {
  let component: ComprasManagerComponent;
  let fixture: ComponentFixture<ComprasManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

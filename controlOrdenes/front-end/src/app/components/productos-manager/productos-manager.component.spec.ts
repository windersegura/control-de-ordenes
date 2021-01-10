import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosManagerComponent } from './productos-manager.component';

describe('ProductosManagerComponent', () => {
  let component: ProductosManagerComponent;
  let fixture: ComponentFixture<ProductosManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityRendererComponent } from './quantity-renderer.component';

describe('QuantityRendererComponent', () => {
  let component: QuantityRendererComponent;
  let fixture: ComponentFixture<QuantityRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

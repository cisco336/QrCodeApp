import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrConfigComponent } from './qr-config.component';

describe('QrConfigComponent', () => {
  let component: QrConfigComponent;
  let fixture: ComponentFixture<QrConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

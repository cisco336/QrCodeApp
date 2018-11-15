import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrSettingsComponent } from './qr-settings.component';

describe('QrSettingsComponent', () => {
  let component: QrSettingsComponent;
  let fixture: ComponentFixture<QrSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

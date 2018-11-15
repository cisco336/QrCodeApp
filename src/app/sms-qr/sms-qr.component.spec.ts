import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsQrComponent } from './sms-qr.component';

describe('SmsQrComponent', () => {
  let component: SmsQrComponent;
  let fixture: ComponentFixture<SmsQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailQrComponent } from './email-qr.component';

describe('EmailQrComponent', () => {
  let component: EmailQrComponent;
  let fixture: ComponentFixture<EmailQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcardQrComponent } from './vcard-qr.component';

describe('VcardQrComponent', () => {
  let component: VcardQrComponent;
  let fixture: ComponentFixture<VcardQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcardQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcardQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

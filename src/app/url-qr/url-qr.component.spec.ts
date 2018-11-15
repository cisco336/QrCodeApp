import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlQrComponent } from './url-qr.component';

describe('UrlQrComponent', () => {
  let component: UrlQrComponent;
  let fixture: ComponentFixture<UrlQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

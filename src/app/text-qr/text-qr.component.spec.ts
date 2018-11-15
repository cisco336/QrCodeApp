import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextQrComponent } from './text-qr.component';

describe('TextQrComponent', () => {
  let component: TextQrComponent;
  let fixture: ComponentFixture<TextQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

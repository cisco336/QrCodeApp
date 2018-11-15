import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheQrComponent } from './the-qr.component';

describe('TheQrComponent', () => {
  let component: TheQrComponent;
  let fixture: ComponentFixture<TheQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

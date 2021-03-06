import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  lightTheme = false;
  @Output() themeEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  themeChange() {
    this.themeEvent.emit(this.lightTheme);
  }
}

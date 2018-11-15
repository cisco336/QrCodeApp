import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public screenHeight;
  public bodyHeight;
  constructor() {
  }

  ngOnInit() {
    this.screenHeight = window.screen.height;
    this.bodyHeight = document.getElementsByTagName('app-root').item(0).children.item(0).clientHeight;
    this.screenheight(this.bodyHeight, this.screenHeight);
  }
  screenheight(x, y) {
    if (x < y) {
      // const _x = document.getElementsByTagName('app-root').item(0).children.item(0);
      const _x = document.querySelector('app-root').children.item(0);
      console.log(x + ' __ ' + y);
      (<HTMLInputElement>_x).style.minHeight = y + 'px';
      (<HTMLInputElement>_x).style.marginBottom = -56 + 'px';
      (<HTMLInputElement>_x).style.paddingBottom = 56 + 'px';
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { animamtions } from '../animations/animations';

@Component({
  selector: 'app-the-qr',
  templateUrl: './the-qr.component.html',
  styleUrls: ['./the-qr.component.scss'],
  animations: [animamtions]
})
export class TheQrComponent implements OnInit {
  tag1: boolean;
  tag2: boolean;
  notag: boolean;
  qrData: any = '';
  qrConfig: any[] = [];
  qrDivWrapper = function() {
    return {
      'background': this.qrConfig[3],
      'width.px': this.qrConfig[0] + 32
    };
  };
  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.tag1 = false;
    this.tag2 = false;
    this.notag = true;
    this.subscriptions();
  }
  subscriptions() {
     /**
     * Subscription to DataService to recieve data for the Qr
     * Code
     */
    this._dataService.currentConfig.subscribe(configStream => {
      this.qrConfig = [...configStream];
      this._dataService.currenData.subscribe(dataStream => {
          this.qrData = '';
          setTimeout(() => {
            this.qrData = dataStream;
          });
        });
    });
  }
  /**
   * Clear the data for generating the Qr Code
   * @returns void
   */
  clearData() {
    this.qrData = '';
  }
  toggleClasses(x) {
    switch (x) {
      case 1:
        this.tag1 = true;
        this.tag2 = false;
        this.notag = false;
        break;
      case 2:
        this.tag1 = false;
        this.tag2 = true;
        this.notag = false;
        break;
      default:
        this.tag1 = false;
        this.tag2 = false;
        this.notag = true;
        break;
    }
  }
}

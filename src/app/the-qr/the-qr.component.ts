import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from '../data.service';
import { animamtions } from '../animations/animations';

@Component({
  selector: 'app-the-qr',
  templateUrl: './the-qr.component.html',
  styleUrls: ['./the-qr.component.scss'],
  animations: [animamtions]
})
export class TheQrComponent implements OnInit {
  qrData: any = '';
  qrConfig: any[] = [];
  qrDivWrapper = function() {
    return {
      'background': this.qrConfig[3],
      'max-width.px': this.qrConfig[0]
    };
  };
  constructor(private _dataService: DataService) {}

  ngOnInit() {
   this.subscriptions();
  }
  subscriptions() {
     /**
     * Subscription to DataService to recieve data for the Qr
     * Code
     */
    this._dataService.currenData.subscribe(dataStream => {
      this.qrData = dataStream;
    });

    /**
     * Subscription to DataService to recieve config for the Qr
     * Code
     */
    this._dataService.currentConfig.subscribe(configStream => {
      this.qrConfig = [...configStream];
    });
  }
  /**
   * Clear the data for generating the Qr Code
   * @returns void
   */
  clearData() {
    this.qrData = '';
  }
}

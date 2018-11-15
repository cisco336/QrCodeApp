import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-url-qr',
  templateUrl: './url-qr.component.html',
  styleUrls: ['./url-qr.component.scss']
})
export class UrlQrComponent implements OnInit {
  qrData: any;
  qrConfig: any[];
  constructor(private _dataService: DataService) {
  }
  ngOnInit() {
    /**
     * Suscription to DataService to recieve data for the Qr
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
    console.log(this.qrConfig);
  }
  /**
   * Recieve tha data from the input field and send it to
   * DataService
   * @param urlQr
   */
  sendData(urlQr) {
    // if (!opt) { opt = 'http://'; }
    this.qrData = urlQr;
    this._dataService.setQrData(this.qrData);
    this._dataService.setQrConfig(this.qrConfig);
    console.log(this.qrConfig);
  }
}

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
  aux;
  constructor(private _dataService: DataService) {}
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
  }
  /**
   * Recieve tha data from the input field and send it to
   * DataService
   * @param urlQr
   */
  sendData(urlQr) {
    // console.log(this.qrData + ' ' + this.qrConfig);
    this._dataService.sendData(urlQr, this.qrConfig);
  }
}

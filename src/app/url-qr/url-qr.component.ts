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
    this.subscriptions();
  }
  subscriptions() {
    /**
     * Suscription to DataService to recieve data for the Qr
     * Code
     */
    this._dataService.currenData.subscribe(dataStream => {
      this._dataService.currentConfig.subscribe(configStream => {
        this.qrConfig = [...configStream];
        this.qrData = dataStream;
      });
    });

  }
  /**
   * Recieve tha data from the input field and send it to
   * DataService
   * @param urlQr
   */
  sendData(urlQr) {
    this._dataService.sendData(urlQr, this.qrConfig);
  }
}

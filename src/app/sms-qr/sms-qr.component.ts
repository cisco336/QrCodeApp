import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sms-qr',
  templateUrl: './sms-qr.component.html',
  styleUrls: ['./sms-qr.component.scss']
})
export class SmsQrComponent implements OnInit {
  qrData: any;
  qrConfig: any[];
  constructor(private _dataService: DataService) {
  }
  ngOnInit() {
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
      this.qrConfig = configStream;
    });
  }
  /**
   * Recieve tha data from the input field and send it to
   * DataService
   * @param - prefix, firstName, lastName, org, position, phoneHome, phoneWork, mobile, street, city, zip, state, country, email, uri
   */
  sendData(countryCode, phone, body) {
    let _body = body;
    for (let i = 0 ; i < _body.length ; i++) {
      _body = _body.replace(' ', '%20');
    }
    this.qrData = '<a href="sms:' + countryCode + phone + ';?&body=' + _body + '"></a>';
    this._dataService.setQrData(this.qrData);
    this._dataService.setQrConfig(this.qrConfig);
  }
}

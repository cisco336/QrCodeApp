import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-email-qr',
  templateUrl: './email-qr.component.html',
  styleUrls: ['./email-qr.component.scss']
})
export class EmailQrComponent implements OnInit {
  qrData: any;
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
  }
  /**
   * Recieve tha data from the input field and send it to
   * DataService
   * @param - destination, subject and body
   */
  sendData(to, subject, body) {
    this.qrData = `MATMSG:TO:${to};
SUB:${subject};
BODY:${body};`;
    this._dataService.setQrData(this.qrData);
  }
}

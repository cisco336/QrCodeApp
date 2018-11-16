import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-vcard-qr',
  templateUrl: './vcard-qr.component.html',
  styleUrls: ['./vcard-qr.component.scss']
})
export class VcardQrComponent implements OnInit {
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
   * @param - prefix, firstName, lastName, org, position, phoneHome, phoneWork, mobile, street, city, zip, state, country, email, uri
   */
  sendData(prefix, firstName, lastName, org, position, phoneHome, phoneWork, mobile, street, city, zip, state, country, email, uri) {
    this.qrData = `BEGIN:VCARD
VERSION:4.0
N:${firstName};${lastName};;${prefix};
FN:${firstName};${lastName}
ORG:${org}
TITLE:${position}
TEL;TYPE=home,voice:${phoneHome}
TEL;TYPE=work,voice:${phoneWork}
TEL;TYPE=mobile,voice,pref:${mobile}
ADR;TYPE=HOME:${street};${city};${zip};${state};${country}
EMAIL:${email}
URL:${uri}
END:VCARD
`;
    console.log(this.qrData);
    this._dataService.setQrData(this.qrData);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _qrData = new BehaviorSubject('');
  private _config = new BehaviorSubject( [ 128, 'M', '#000', '#fff' ] );
  currentConfig = this._config.asObservable();
  currenData = this._qrData.asObservable();

  constructor() { }

  setQrData(qrData: any) {
    this._qrData.next(qrData);
  }
  setQrConfig(qrConfig: string[]) {
    this._config.next(qrConfig);
  }
  sendData(data, config) {
    this.setQrData(data);
    this.setQrConfig(config);
    console.log(data + '  ' + config);
  }
}

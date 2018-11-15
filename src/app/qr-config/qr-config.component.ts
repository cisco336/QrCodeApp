import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-qr-config',
  templateUrl: './qr-config.component.html',
  styleUrls: ['./qr-config.component.scss']
})
export class QrConfigComponent implements OnInit {
  usesvg: boolean = false;
  qrConfig: any[];
  codeSize = '128';
  codeLevel = 'M';
  codeColor = '#000000';
  backColor = '#ffffff';
  step = 0;
  levels: any[] = [
    {value: 'l', viewValue: 'L', percent: '7'},
    {value: 'm', viewValue: 'M', percent: '15'},
    {value: 'q', viewValue: 'Q', percent: '25'},
    {value: 'h', viewValue: 'H', percent: '30'}
  ];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    /**
     * Subscription to DataService to recieve config for the Qr
     * Code
     */
    this._dataService.currentConfig.subscribe(configStream => {
      this.qrConfig = configStream;
    });
  }

  change() {
    this.qrConfig[0] = +this.codeSize;
    this.qrConfig[1] = this.codeLevel;
    this.qrConfig[2] = this.codeColor;
    this.qrConfig[3] = this.backColor;
    this.qrConfig[4] = this.usesvg;
    this._dataService.setQrConfig(this.qrConfig);
  }

  defaultColor(x: boolean) {
    if (x) {
      this.codeColor = '#000000';
      this.change();
    } else {
      this.backColor = '#ffffff';
      this.change();
    }
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}

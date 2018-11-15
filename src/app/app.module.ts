import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, MatTabsModule, MatFormFieldModule } from '@angular/material';
import { MatInputModule, MatCardModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { MatSliderModule, MatSlideToggleModule, MatExpansionModule } from '@angular/material';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { QrSettingsComponent } from './qr-settings/qr-settings.component';
import { UrlQrComponent } from './url-qr/url-qr.component';
import { VcardQrComponent } from './vcard-qr/vcard-qr.component';
import { TheQrComponent } from './the-qr/the-qr.component';
import { QRCodeModule } from 'angularx-qrcode';
import { TextQrComponent } from './text-qr/text-qr.component';
import { EmailQrComponent } from './email-qr/email-qr.component';
import { SmsQrComponent } from './sms-qr/sms-qr.component';
import { QrConfigComponent } from './qr-config/qr-config.component';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    QrSettingsComponent,
    UrlQrComponent,
    VcardQrComponent,
    TheQrComponent,
    TextQrComponent,
    EmailQrComponent,
    SmsQrComponent,
    QrConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, MatTabsModule, MatSliderModule, MatSlideToggleModule,
    MatFormFieldModule, MatInputModule, MatCardModule, MatSelectModule, MatOptionModule, MatExpansionModule,
    QRCodeModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

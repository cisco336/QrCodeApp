import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, MatTabsModule, MatFormFieldModule } from '@angular/material';
import { MatInputModule, MatCardModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { MatSliderModule, MatSlideToggleModule, MatExpansionModule, MatDividerModule } from '@angular/material';
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

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faQrcode, faPercentage, faGlobe, faIdCard, faComments, faEnvelope, faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { faInfo, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
// Free Solid
library.add( faQrcode, faPercentage, faGlobe, faIdCard, faComments, faEnvelope, faAlignLeft, faInfo, faThumbsUp );
// Free Brands
library.add( faTwitter, faFacebookF, faLinkedinIn );

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
    MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, MatTabsModule, MatSliderModule, MatSlideToggleModule, MatDividerModule,
    MatFormFieldModule, MatInputModule, MatCardModule, MatSelectModule, MatOptionModule, MatExpansionModule,
    QRCodeModule,
    ColorPickerModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

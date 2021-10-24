import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlowerService } from './services/flower.service';
import { LogFlowerComponent } from './log-flower/log-flower.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AppComponent, LogFlowerComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ChartsModule],
  providers: [FlowerService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

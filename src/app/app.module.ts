import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { FrameworkModule } from './framework/framework.module';

import { AppComponent } from './app.component'; 
import { ProductModule  } from './pages/product/product.module';
import { UserModule } from './pages/user/user.module';
import { HomeModule } from './pages/home/home.module';
import { AppService } from './app.service';

import {appRouting} from './app.routes';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FrameworkModule,
    ProductModule,
    UserModule,
    HomeModule,
    appRouting
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

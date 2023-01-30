import { MessageService } from './message.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewMessageService } from './new-message.service';
import { CustomComponent } from './custom/custom.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: MessageService,
      useFactory: (httpClient:HttpClient) => {
        return new Date().getFullYear() >= 2024 ? new NewMessageService() : new MessageService()
      },
      deps:[HttpClient]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

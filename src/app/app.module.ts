import { MessageService } from './message.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, messageInjectToken } from './app.component';
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
    { provide: messageInjectToken, useValue: {
      message:"a",
      user:"b"
    }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

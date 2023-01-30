import { MessageService } from './message.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewMessageService } from './new-message.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide:MessageService,useClass:NewMessageService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, Inject, InjectionToken, Optional } from '@angular/core';
// import { MessageService } from './message.service';

export const messageInjectToken = new InjectionToken<string>("Message Token");

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    // public messageService:MessageService,
    @Inject("messageInjectToken") @Optional() public message:string
  ){

  }
}

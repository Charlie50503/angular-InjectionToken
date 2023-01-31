import { Component, Inject, InjectionToken, Optional } from '@angular/core';
// import { MessageService } from './message.service';

export const messageInjectToken = new InjectionToken<Message>("Message Token");
export const messageInjectToken = new InjectionToken<string>("Message Token");
export class Message {
  message!:string;
  user!:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    // public messageService:MessageService,
    @Inject("messageInjectToken") @Optional() public message:string
    @Inject(messageInjectToken)  public message:Message
  ){

  }
}

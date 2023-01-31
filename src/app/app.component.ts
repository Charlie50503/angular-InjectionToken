import { Component, Inject, InjectionToken, Optional } from '@angular/core';
// import { MessageService } from './message.service';

export const messageInjectToken = new InjectionToken<Message>("Message Token");
export const MY_TOKEN = new InjectionToken<string>('My Token');
export class Message {
  message!:string;
  user!:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{ provide: MY_TOKEN, useValue: 'My Value' }]
})
export class AppComponent {
  constructor(
    // public messageService:MessageService,
    @Inject(MY_TOKEN) public value: string,
    @Inject(messageInjectToken)  public message:Message
  ){

  }
}

import { Component, Inject } from '@angular/core';
// import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    // public messageService:MessageService,
    @Inject("Message") public message:string
  ){

  }
}

import { Component, Inject, Optional } from '@angular/core';
// import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    // public messageService:MessageService,
    @Inject("Message") @Optional() public message:string
  ){

  }
}

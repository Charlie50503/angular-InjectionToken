import { MessageService } from './message.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewMessageService extends MessageService {

  constructor() {
    super()
   }

  override getMessage(){
    return "this is message from the new message services"
  }
}

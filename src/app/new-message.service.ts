import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewMessageService {

  constructor() { }

  getMessage(){
    return "this is message from the new message services"
  }
}

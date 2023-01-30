import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';
import { NewMessageService } from '../new-message.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
  providers:[{
    provide:MessageService,useClass:NewMessageService
  }
    // provider:MessageService,class:NewMessageService
  ]
})
export class CustomComponent implements OnInit {

  constructor(public messageService:MessageService) { }

  ngOnInit(

  ): void {
  }

}

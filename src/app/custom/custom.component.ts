import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
  providers:[MessageService]
})
export class CustomComponent implements OnInit {

  constructor(public messageService:MessageService) { }

  ngOnInit(

  ): void {
  }

}

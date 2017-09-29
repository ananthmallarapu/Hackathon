import { CountService } from './../count.service';
import { Component, OnInit,Input } from '@angular/core';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  
  @Input() randomNumber;
  @Input() cardIndex;


  incrementCount(){

    if(this.cardIndex===this.randomNumber)

   { this.c.icrementCount();
    
   // console.log(this.c.displayCount());
   }

  }

  

  constructor(private c :CountService) { }

  ngOnInit() {
  }

}

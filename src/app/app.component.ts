import { CountService } from './count.service';
import { Component ,OnInit} from '@angular/core';

import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private c :CountService) {
    
    
      }
      ngOnInit(){
        this.score=this.c.displayCount();
        console.log("score ",this.c.displayCount());
      }
  startTimer(){
    this.disablestart=true;
    Observable.timer(0, 1000) // timer(firstValueDelay, intervalBetweenValues)
    .map(i => this.count - i)
    .take(this.count + 1)
    .subscribe(i =>{ console.log("count");console.log(i);
  this.message=i
  });
  }
  startColorChange(){
    this.disblecolorchangecounter=true;
    Observable.timer(0, 500) // timer(firstValueDelay, intervalBetweenValues)
    .map(i => i)
    .take(this.count*2)
    .subscribe(i =>{ //console.log(i);
  //this.message=i
  this.randomNumber=Math.floor(Math.random() * (4)) + 0});
  
  //console.log(this.score);
  }

  
    
  
  title = 'app';
  message;
  private count=60;
  disablestart=false;
  disblecolorchangecounter=false;
  randomNumber;
  score;
  displayScore(){
  this.score=this.c.displayCount();
  }

}

  
    



import { Injectable } from '@angular/core';

@Injectable()
export class CountService {
count:number=0;
  constructor() { }
  icrementCount(){
    this.count++;
  }
  displayCount():number{
    return(this.count);
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  numProd:number = 1;

  incremented = ():void =>{
    this.numProd++;
    console.log(this.numProd);
  }
  dism = ():void =>{
    if(this.numProd <= 1)
      alert("Solo permiten valore positivos")
    else
      this.numProd--;
      console.log(this.numProd);
  }
}

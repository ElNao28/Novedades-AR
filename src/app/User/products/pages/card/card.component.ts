import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  numProd:number = 1;

  datos = [{
    Nombre: "Ropa 1",
    Precio: 500.00,
    imagen :"ulr"
  },
  {
    Nombre: "Ropa 2",
    Precio: 300.00,
    imagen :"ulr"
  },
  {
    Nombre: "Ropa 3",
    Precio: 1200.00,
    imagen :"ulr"
  },
  {
    Nombre: "Ropa de arturo",
    Precio: 5000.00,
    imagen :"ulr"
  },
]
  incremented = ():void =>{
    this.numProd++;
    console.log(this.numProd);
  }
  dism = ():void =>{
    if(this.numProd <= 1)
      alert("Solo se permite como minimo 1 producto")
    else
      this.numProd--;
      console.log(this.numProd);
  }
}

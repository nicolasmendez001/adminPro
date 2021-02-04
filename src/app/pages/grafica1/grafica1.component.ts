import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

  public labels1: string[] = ['Pan', 'Galletas', 'Gaseosa'];
  public data1 = [[200, 500, 400]];


}

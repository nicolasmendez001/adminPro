import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {


  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`
  }

  @Input() progreso: number = 20;
  @Input() btnClass: string = 'btn btn-primary';
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  get getPorcentaje() {
    return `${this.progreso}%`
  }

  cambiarValor(valor: number) {
    this.valorSalida.emit(100);
    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(0);
      return this.progreso = 100;
    }
    if (this.progreso <= 0 && valor <= 0) {
      return this.progreso = 0;
    }
    this.progreso += valor;
    this.valorSalida.emit(this.progreso);
  }

  onChange(valor: number) {
    if (valor <= 0) {
      this.progreso = valor = 0;
    } else if (valor >= 100) {
      this.progreso = valor = 100;
    } else {
      this.progreso = valor;
    }
    this.valorSalida.emit(this.progreso);
  }


}

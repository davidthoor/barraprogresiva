import { Component } from '@angular/core';

@Component({
  selector: 'app-barradeprogreso',
  templateUrl: './barradeprogreso.component.html'
})

export class BarradeprogresoComponent {
  public valordbarra = 0;
  public contador: number = 0;
  public valorseleccionado: number = 0


  botonsumar(cantidad: number): void {
    this.contador += cantidad;
    this.valordbarra = this.contador /100
    this.calcularPorcentaje(this.contador)
  }
  botonrestar(cantidad: number): void {
    this.contador -= cantidad;
    this.valordbarra = this.contador /100
    this.calcularPorcentaje(this.contador)
  }
  SeleccionarPorcentaje(valor:string){
    this.contador += Number(valor)
    this.valordbarra = this.contador /100
    this.calcularPorcentaje(this.contador)
  }
  calcularPorcentaje(numero:number){
    if(this.contador>100){ 
     this.contador = 100
    }else if(this.contador<0){
      this.contador = 0
    }
  }  
  constructor() {}
}

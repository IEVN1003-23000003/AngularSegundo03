import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { distancia } from './distancia';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-distancia',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  formulario!: FormGroup;
  resultado!: number;
   obj = new distancia()

  //es como un constructor de una clase, se ejecuta segun se van creando componentes
  ngOnInit(): void {
    this.formulario = new FormGroup({
      x1: new FormControl(''),
      y1: new FormControl(''),
      x2: new FormControl(''),
      y2: new FormControl(''),
    });
  }

  calcular(){
//inicializa con valores
    
      this.obj.x1=this.formulario.value.x1
      this.obj.y1=this.formulario.value.y1
      this.obj.x2=this.formulario.value.x2
      this.obj.y2=this.formulario.value.y2
  


    this.resultado = this.obj.calculardist();
  }

}





    /*x1: string = "";
    y1: string = '';
    x2: string = '';
    y2: string = '';
    Resultado: number = 0;

    calcular(){
      this.Resultado=(((parseInt(this.x2)+parseInt(this.x1))^2)+((parseInt(this.y2)+parseInt(this.y1))^2))^(1/2);
      return this.Resultado
    }*/


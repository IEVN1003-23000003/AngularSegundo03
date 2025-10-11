import { Component } from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule,FormControl } from '@angular/forms';
import {AporB} from './aporb';

@Component({
  selector: 'app-aporb',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './aporb.component.html',
  styleUrl: './aporb.component.css'

})
export class AporbComponent {
  formulario!: FormGroup;
  total!: number;
  objmult = new AporB();
  

  ngOnInit(): void {
    this.formulario = new FormGroup({
      a: new FormControl(''),
      b: new FormControl('')
    })
  }

  calcular(): void{
    this.objmult.a = this.formulario.value.a
    this.objmult.b = this.formulario.value.b

    this.total = this.objmult.multiplicar()
  }

}

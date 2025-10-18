import { Component } from '@angular/core';
import { TemhComponent } from '../temh/temh.component';

@Component({
  selector: 'app-temp',
  imports: [TemhComponent],
  templateUrl: './temp.component.html',
  styleUrl: './temp.component.css'
})
export class TempComponent {

  title:string="Hola desde papá"

  mensaje2:String="";
  recibirMensaje(event:String){
    this.mensaje2=event;
  }
}

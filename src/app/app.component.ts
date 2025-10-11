import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from "./formularios/distancia/distancia.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZodiacoComponent } from "./formularios/zodiaco/zodiaco.component";
import { AporbComponent } from "./formularios/aporb/aporb.component";

@Component({
  selector: 'app-root',//los imports van aqui
  imports: [RouterOutlet, ZodiacoComponent, FormsModule, ReactiveFormsModule, DistanciaComponent, AporbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo03';
}

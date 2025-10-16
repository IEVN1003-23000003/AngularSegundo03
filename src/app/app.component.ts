import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from "./formularios/distancia/distancia.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZodiacoComponent } from "./formularios/zodiaco/zodiaco.component";
import { AporbComponent } from "./formularios/aporb/aporb.component";

import{initFlowbite} from 'flowbite';
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',//los imports van aqui
  imports: [RouterOutlet,NavbarComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo03';

  ngOnInit(): void{
    initFlowbite();
  }
}

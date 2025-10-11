import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { zodiaco } from './zodiaco';


@Component({
  selector: 'app-zodiaco',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})


export class ZodiacoComponent {
  formulario!: FormGroup;

  //creamos objeto de clase
  obj = new zodiaco ()
  signo!: string;
  edad!: number;
  signoImg = '';
  nombcom!: string;


  //imagenes
  signosImgs: any = {
    Rata:'https://images.vexels.com/media/users/3/282630/isolated/preview/8224ec4e7b606b739a9b4b0ad2ceec74-signo-zodiacal-chino-de-la-rata-del-ano-nuevo.png',
    Buey:'https://peopleenespanol.com/thmb/ia0u33jxk7_bfFTLf1viDW9j5LA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/horoscopo-chino-buey-de-metal-2021-e93c7ebe89ab4c0daa8704d6e4a827dd.png' ,
    Tigre:'https://images.vexels.com/media/users/3/283080/isolated/preview/fe9cd64b7b632229026529352e2aab6e-salto-del-tigre-del-zodiaco-chino.png',
    Conejo:'https://peopleenespanol.com/thmb/-ekXDGhFH6Baw6C29OGuDxf8iDQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165927323-2000-c6361314aab74b7485a5ea677666ba83.jpg' ,
    Dragón:'https://static.vecteezy.com/system/resources/previews/016/927/860/non_2x/dragon-chinese-zodiac-animal-free-vector.jpg',
    Serpiente:'https://media.istockphoto.com/id/165930223/es/vector/a%C3%B1o-de-la-serpiente.jpg?s=612x612&w=0&k=20&c=KPbx-vCkDwNB1JCMkGDze2VG_TGLXit4M_u8JAQqOok=' ,
    Caballo:'https://images.vexels.com/media/users/3/283213/isolated/preview/939912b88c45665e1940e4e1cea8f798-caballo-del-zodiaco-chino-tradicional.png' ,
    Cabra:'https://peopleenespanol.com/thmb/Fwy99mIonHJYbhmA9AOTeWCpkdU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165967741-2000-12afb4d370f14afe856f05ba36fe1693.jpg' ,
    Mono:'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Mono.jpg' ,
    Gallo:'https://peopleenespanol.com/thmb/Th2wLXhS9Tzh3VR7DtVB9CwgUFE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165926089-2000-25a52aba2d0942679de98ba836f1ab9f.jpg' ,
    Perro:'https://heraldodemexico.com.mx/u/fotografias/m/2021/12/24/f850x638-458845_536334_5050.jpg' ,
    Cerdo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeXig57kR6TSxd7uLLvJHUf6Qwj_yt3TdiYw&s' 
  };



  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apaterno: new FormControl(''),
      amaterno: new FormControl(''),
      dia: new FormControl(''),
      mes: new FormControl(''),
      anio: new FormControl(''),
      sexo: new FormControl(''),
    });
  }
  imprimir(): void {
    //pasa valores usando propiedades de la clase
    this.obj.nombre = this.formulario.value.nombre
    this.obj.apaterno = this.formulario.value.apaterno // como esta en clase (zodiaco.ts) y luego como está en el html
    this.obj.amaterno = this.formulario.value.amaterno
    this.obj.dia=this.formulario.value.dia
    this.obj.mes=this.formulario.value.mes
    this.obj.anio=this.formulario.value.anio

    this.nombcom = this.obj.nombrecom();
    this.edad = this.obj.calculoedad();
    this.signo = this.obj.calculosigno();
    this.signoImg = this.signosImgs[this.signo] || '';

  }
}

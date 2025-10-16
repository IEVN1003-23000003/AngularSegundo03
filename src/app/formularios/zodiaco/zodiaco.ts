export class zodiaco {
//propiedades de clase
    public nombre: string =''
    public apaterno: string=''
    public amaterno: string=''
    public dia: number=0
    public mes: number=0
    public anio: number=0
    public sexo: string=''

  nombrecom(): string{
    let nombcom = this.nombre + this.apaterno + this.amaterno;
    return nombcom
  }

  calculoedad(): number {
    const hoy = new Date();
    let edad = hoy.getFullYear() - this.anio;
    return edad
  }

  calculosigno(): string{
    const signos = ['Mono','Gallo','Perro','Cerdo','Rata','Buey','Tigre','Conejo','Dragon','Serpiente','Caballo','Cabra'];
    return signos[this.anio % 12];
  }
  }
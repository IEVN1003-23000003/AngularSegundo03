
export class distancia {

  public x1: number = 0
  public y1: number = 0
  public x2: number = 0
  public y2: number = 0



  calculardist(): number {
    let resultado1 = Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2));
    return resultado1
  }


  //propiedades de la clase y metodos para calcular


  /*x1: string = "";
  y1: string = '';
  x2: string = '';
  y2: string = '';
  Resultado: number = 0;

  calcular(){
    this.Resultado=(((parseInt(this.x2)+parseInt(this.x1))^2)+((parseInt(this.y2)+parseInt(this.y1))^2))^(1/2);
    return this.Resultado
  }*/
}

export class AporB {
   public a : number = 0;
   public b : string = '';
   public total : number = 0;

    multiplicar(): number{
        for (let i = 0 ; i < this.a; i++ ){
            this.total = this.total+parseInt(this.b)
        }
        return this.total
    }

}
/* type Psize = 'small' | 'medium' | 'large' | 'XL'; */


class Pizza{
    //section de abstaccion
    //We declare the common properties that all pizzas will share
    private _jamon: number;
    private _pepe: number;
    private _pina: number;
    private _exChesse:boolean;
  
    constructor( jamon:number, pepe:number, pina:number, exChesse:boolean){
      this._jamon = jamon;
      this._pepe = pepe;
      this._pina = pina;
      this._exChesse = exChesse;
    }
  
    //polymorphism
    orderSummary(): string{
      let chState:string = ''; //this variable storage the value of extra chesse in a Yes or NO 
      let totalIng: number = (this._jamon+this._pepe+this._pina);
      //if exChesse is True then
      this._exChesse
        ? chState = 'Yes' //the user will read YES
        : chState = 'No' //else will read No
      return `|Ingredients: ${totalIng}
            Ham: ${this._jamon}
            Peperoni: ${this._pepe}
            Pineapple: ${this._pina}
        |Extra Chesses: ${chState} 
      ==========================`
    }

    //ENCAPSULAMIENTO
    //Setters section
    public set jamon(v : number) {
        this._jamon = v;
    }
    public set pepe(v : number) {
        this._pepe = v;
    }
    public set pina(v : number) {
        this._pina = v;
    }
    public set exChesse(v : boolean) {
        this._exChesse = v;
    }


    //getters section

    public get jamon() : number {
        return this._jamon
    }
    public get pepe() : number {
        return this._pepe
    }
    public get pina() : number {
        return this._pina
    }
    public get exChesse() : boolean {
        return this._exChesse
    }     
}


//inheritance section
class SmallPizza extends  Pizza{
    static getCost: any;

    constructor( jamon:number, pepe:number, pina:number, exChesse:boolean) {
      super(jamon, pepe, pina, exChesse);
    }

    getCost() {
        //we generate the cost of the pizza
        let price: number = 10;
        price = price + (2 * (this.jamon + this.pepe + this.pina))
        if (this.exChesse == true) {
          price = price + 2
        }
        return price;
      }
    

    orderSummary(): string {
        let finalPrice = 
        `
        ====== YOUR ORDER =======
        |Size: small 
        |price: $${this.getCost()}
        ${super.orderSummary()}` //we obtain the rest of the information from the parent class
        return finalPrice;  
    }
}

class MediumPizza extends Pizza{
    static getCost: any;

    constructor( jamon:number, pepe:number, pina:number, exChesse:boolean) {
      super(jamon, pepe, pina, exChesse);
    }

    getCost() {
        let price: number = 12;
        price = price + (2 * (this.jamon + this.pepe + this.pina))
        if (this.exChesse == true) {
          price = price + 4
        }
        return price;
      }

    orderSummary(): string {
        let finalPrice = 
        `
        ====== YOUR ORDER =======
        |Size: Medium 
        |price: $${this.getCost()} 
        ${super.orderSummary()}` //we obtain the rest of the information from the parent class
        return finalPrice;  
    }
}

class LargePizza extends Pizza{
    static getCost: any;

    constructor( jamon:number, pepe:number, pina:number, exChesse:boolean) {
      super(jamon, pepe, pina, exChesse);
    }

    getCost() {
        let price: number = 14;
        price = price + (3 * (this.jamon + this.pepe + this.pina))
        if (this.exChesse == true) {
          price = price + 6
        }
        return price;
      }

    orderSummary(): string {
        let finalPrice = 
        `
        ====== YOUR ORDER =======
        |Size: Large 
        |price: $${this.getCost()}
        ${super.orderSummary()}` //we obtain the rest of the information from the parent class
        return finalPrice;  
    }
}
class XlPizza extends Pizza{
    static getCost: any;

    constructor( jamon:number, pepe:number, pina:number, exChesse:boolean) {
      super(jamon, pepe, pina, exChesse);
    }

    getCost() {
        let price: number = 18;
        price = price + (4 * (this.jamon + this.pepe + this.pina))
        if (this.exChesse == true) {
          price = price + 6
        }
        return price;
      }

    orderSummary(): string {
        let finalPrice = 
        `
        ====== YOUR ORDER =======
        |Size: Xtra Large 
        |price: $${this.getCost()}
        ${super.orderSummary()}` //we obtain the rest of the information from the parent class
        return finalPrice;  
    }
}






//EXAMPLES SECTION

const pizzaSmall = new SmallPizza (1,1,1,true);
console.log(pizzaSmall.orderSummary())
const pizzaMedium = new MediumPizza (6,4,1,true);
console.log(pizzaMedium.orderSummary())
const pizzaLarge = new LargePizza (1,1,1,false);
console.log(pizzaLarge.orderSummary())
const pizzaXL = new XlPizza (1,10,1,true);
console.log(pizzaXL.orderSummary())

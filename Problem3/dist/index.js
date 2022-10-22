/* type Psize = 'small' | 'medium' | 'large' | 'XL'; */
class Pizza {
    constructor(jamon, pepe, pina, exChesse) {
        this._jamon = jamon;
        this._pepe = pepe;
        this._pina = pina;
        this._exChesse = exChesse;
    }
    //polymorphism
    orderSummary() {
        let chState = ''; //this variable storage the value of extra chesse in a Yes or NO 
        let totalIng = (this._jamon + this._pepe + this._pina);
        //if exChesse is True then
        this._exChesse
            ? chState = 'Yes' //the user will read YES
            : chState = 'No'; //else will read No
        return `|Ingredients: ${totalIng}
            Ham: ${this._jamon}
            Peperoni: ${this._pepe}
            Pineapple: ${this._pina}
        |Extra Chesses: ${chState} 
      ==========================`;
    }
    //ENCAPSULAMIENTO
    //Setters section
    set jamon(v) {
        this._jamon = v;
    }
    set pepe(v) {
        this._pepe = v;
    }
    set pina(v) {
        this._pina = v;
    }
    set exChesse(v) {
        this._exChesse = v;
    }
    //getters section
    get jamon() {
        return this._jamon;
    }
    get pepe() {
        return this._pepe;
    }
    get pina() {
        return this._pina;
    }
    get exChesse() {
        return this._exChesse;
    }
}
//inheritance section
class SmallPizza extends Pizza {
    constructor(jamon, pepe, pina, exChesse) {
        super(jamon, pepe, pina, exChesse);
    }
    getCost() {
        //we generate the cost of the pizza
        let price = 10;
        price = price + (2 * (this.jamon + this.pepe + this.pina));
        if (this.exChesse == true) {
            price = price + 2;
        }
        return price;
    }
    orderSummary() {
        let finalPrice = `
        ====== YOUR ORDER =======
        |Size: small 
        |price: $${this.getCost()}
        ${super.orderSummary()}`; //we obtain the rest of the information from the parent class
        return finalPrice;
    }
}
class MediumPizza extends Pizza {
    constructor(jamon, pepe, pina, exChesse) {
        super(jamon, pepe, pina, exChesse);
    }
    getCost() {
        let price = 12;
        price = price + (2 * (this.jamon + this.pepe + this.pina));
        if (this.exChesse == true) {
            price = price + 4;
        }
        return price;
    }
    orderSummary() {
        let finalPrice = `
        ====== YOUR ORDER =======
        |Size: Medium 
        |price: $${this.getCost()} 
        ${super.orderSummary()}`; //we obtain the rest of the information from the parent class
        return finalPrice;
    }
}
class LargePizza extends Pizza {
    constructor(jamon, pepe, pina, exChesse) {
        super(jamon, pepe, pina, exChesse);
    }
    getCost() {
        let price = 14;
        price = price + (3 * (this.jamon + this.pepe + this.pina));
        if (this.exChesse == true) {
            price = price + 6;
        }
        return price;
    }
    orderSummary() {
        let finalPrice = `
        ====== YOUR ORDER =======
        |Size: Large 
        |price: $${this.getCost()}
        ${super.orderSummary()}`; //we obtain the rest of the information from the parent class
        return finalPrice;
    }
}
class XlPizza extends Pizza {
    constructor(jamon, pepe, pina, exChesse) {
        super(jamon, pepe, pina, exChesse);
    }
    getCost() {
        let price = 18;
        price = price + (4 * (this.jamon + this.pepe + this.pina));
        if (this.exChesse == true) {
            price = price + 6;
        }
        return price;
    }
    orderSummary() {
        let finalPrice = `
        ====== YOUR ORDER =======
        |Size: Xtra Large 
        |price: $${this.getCost()}
        ${super.orderSummary()}`; //we obtain the rest of the information from the parent class
        return finalPrice;
    }
}
//EXAMPLES SECTION
const pizzaSmall = new SmallPizza(1, 1, 1, true);
console.log(pizzaSmall.orderSummary());
const pizzaMedium = new MediumPizza(6, 4, 1, true);
console.log(pizzaMedium.orderSummary());
const pizzaLarge = new LargePizza(1, 1, 1, false);
console.log(pizzaLarge.orderSummary());
const pizzaXL = new XlPizza(1, 10, 1, true);
console.log(pizzaXL.orderSummary());

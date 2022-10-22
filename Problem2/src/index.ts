/* Create a class called 'Matrix' containing a constructor that initializes the number of rows and number of columns of a new Matrix object.

The Matrix class has the following properties:

number of rows of the matrix
number of columns of the matrix
elements of the matrix in the form of a 2D array
The Matrix class has methods for each of the following:

get the number of rows
get the number of columns
set the elements of the matrix at the given position (i,j)
add two matrices. If the matrices cannot be added log, "NOOP"
multiplying the two matrices
 */

class Matrix{
    //Declare the properties of the class Matrix
    private _rows: number;
    private _columns: number;
    private _elements: number[][];

    constructor(rows:number, columns:number, elements?: number[][]){
        this._rows = rows;
        this._columns = columns;
        this._elements = this.ArrayInitialization(); // Call the method to Fill de matrix with 0 acording to the columns and rows set by the user
    }
    

    protected ArrayInitialization(){
        //this metod will create the 2D Array Structure
        this._elements = []; 
        for (let i = 0; i < this._rows; i++) {
            this._elements[i] = []; // create the row
            for (let j = 0; j < this._columns; j++) {
                this._elements[i][j] = 0; //create every single column of the row
            }
        }
        return this._elements // return 2d array filled of zero
    }; 



    protected fillArray(i:number,j:number, value:number){
        //setter method to the user fill the array acordin de position 
        if(i> this._rows - 1 || j > this._columns -1){ // if the user put a non-existent position return a message
            console.log(`
            _____________________________________________________________________
                            F I L L   A R R A Y  A L E R T
                            ______________________________

            i: ${i}, j: ${j} EXCEEDS THE DECLARED STRUCTURE FOR THE MATRIX, 
            THE CURRENT STRUCTURE IS Rows: ${this._rows} Columns: ${this._columns}
            ----------------------------------------------------------------------
            `)
        } else{
            this._elements[i][j] = value; //if the position is correct then set the value
        }
    }

    static sum(elements: number[][], elements1: number[][]): any {
        //We declare variables that storage the length of rows and columns of the 2 matrix
        let row_m1 = elements.length;
        let col_m1 = elements[0].length;
        let row_m2 = elements1.length;
        let col_m2 = elements1[0].length;
        
        console.log(' ---- Sum Result ----- ')
        //FOR THE SUM OF MATRICES THE SAME STRUCTURE IS NEEDED
        if(row_m1 != row_m2 || col_m1 != col_m2){
            return "NOOP"; //if the structure is not the same then the sum is not posible
        } 
        let result:number[][] = []; //Use to storage the new matrix with sum result
        for (let i = 0; i < row_m1; i++) {
            result[i] = []; //Create the row
            for (let j = 0; j < col_m1; j++) {
                result[i][j] = elements[i][j] + elements1[i][j]; // Sum the values of each matrix for be add to the new one
            }
        }
        return result
    }

    static mult(elements: number[][], elements1: number[][]): any {
         //We declare variables that storage the length of rows and columns of the 2 matrix
        let row_m1 = elements.length;
        let col_m1 = elements[0].length;
        let row_m2 = elements1.length;
        let col_m2 = elements1[0].length;
        console.log(' ---- Multiply Result ----- ')
        if (col_m1 != row_m2){ //For matrix multiplication, the first matrix column must have the same length as the second matrix row.
            return "NOOP";
        }
        //We create the structure of the new matrix acording to the rows of the matrix 1
        //and the columns of the matrix 2
        let result = new Array(row_m1);
        for (let x=0; x < result.length; x++){
            result[x] = new Array(col_m2).fill(0);
        }
        
        //We walk trought the new matrix to the set the news values
        for (let x=0; x < result.length; x++) {
            for (let y=0; y < result[x].length; y++) { 
                //with this for we iterate matrix1 and matrix2                           
                for (let z=0; z < col_m1; z++) {
                    //In each position of result we set the value of the mult each element of the row of matrix1 with each element of the column of matrix2
                    result [x][y] = result [x][y] + elements[x][z]*elements1[z][y]; 
                }
            }
        }
        return result;
    }

    //setter section
    public set rows(v : number) {
        this._rows = v;
    }
    public set columns(v : number) {
        this._columns = v;
    }
    public set elements(v : number[][]) {
        this._elements = v;
    }

    //getter section
    public get rows() : number {
        return this._rows
    }
    public get columns() : number {
        return this._columns
    }
    public get elements() : number[][] {
        return this._elements
    }

}

//inheritance
class Matrix1 extends Matrix{

    constructor( rows:number, columns:number, elements?: number[][]) {
        super(rows, columns, elements);
    }

    ArrayInitialization(): number[][] {
        return super.ArrayInitialization(); 
    }

    fillArray(i,j,value) {
        return super.fillArray(i,j,value);
    }

}

// EXAMPLES AND FUNCTIONALITY SECTION

const matrix1 = new Matrix1(3,3); //Create a new Matrix

//fill matrix 1
matrix1.fillArray(0,0,1)
matrix1.fillArray(0,1,7)
matrix1.fillArray(0,2,10)
matrix1.fillArray(1,0,2)
matrix1.fillArray(1,1,4)
matrix1.fillArray(1,2,14)
matrix1.fillArray(2,0,2)
matrix1.fillArray(2,1,4)
matrix1.fillArray(2,2,14) 


//fill matrix 2
const matrix2 = new Matrix1(3,3); //Create a new Matrix
matrix2.fillArray(0,0,3)
matrix2.fillArray(0,1,3)
matrix2.fillArray(0,2,3)
matrix2.fillArray(1,0,5)
matrix2.fillArray(1,1,2)
matrix2.fillArray(1,2,2)
matrix2.fillArray(2,1,5)
matrix2.fillArray(2,1,2)
matrix2.fillArray(2,2,2)


//Get the elements of the matrix

console.log(' ----Matrix 1----- ')
console.table(matrix1.elements)

console.log(' ----Matrix 2----- ')
console.table(matrix2.elements)


//the resulto of the sum or the mult of the two matrix
console.table(Matrix.sum(matrix1.elements,matrix2.elements))
console.table(Matrix.mult(matrix1.elements,matrix2.elements))


//get the numbers of columns and rows

/*
console.log(`
=========================

MATRIX 1:
Columns: ${matrix1.columns}
Rows: ${matrix1.rows}

=========================

MATRIX 2:
Columns: ${matrix2.columns}
Rows: ${matrix2.rows}

=========================

`)
 */

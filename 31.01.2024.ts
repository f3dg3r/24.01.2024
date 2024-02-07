class Rect{ 
     private x1: number;
     public x2: number; 
     private readonly MAX_COORD = 1000;
     y1: number; 
     y2: number; 
     constructor(x1?: number,x2?:number, y1?:number, y2?: number) {
         this.x1

    }
    square () {
        return Math.abs( this.x1 - this.x2) *
        Math.abs(this.y1 - this.y2)
    }
}


let rect1: Rect = new Rect(10,9) 
let rect2: Rect = new Rect()
rect1.x2 = 4

console.log(rect1.square())
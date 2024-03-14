// class Rect{ 
//      private x1: number;
//      public x2: number; 
//      private readonly MAX_COORD = 1000;
//      y1: number; 
//      y2: number; 
//      constructor(x1?: number,x2?:number, y1?:number, y2?: number) {
//          this.x1

//     }
//     square () {
//         return Math.abs( this.x1 - this.x2) *
//         Math.abs(this.y1 - this.y2)
//     }
// }


// let rect1: Rect = new Rect(10,9) 
// let rect2: Rect = new Rect()
// rect1.x2 = 4

// console.log(rect1.square())

// class Temp{
//     private x: number
//     public y: number
//     constructor(val1?:number, val2?:number){
//         val1 ? this.x = val1 : this.x = 1
//         val2 ? this.y = val2 : this.y = 2
//     }
// public get getX(){
//     return this.x
// }
// public set setX(value: number) {
//     this.x = value
// }
// }
// let temp2 = new Temp(10,20)
// temp2.setX = 6
// console.log(temp2.getX)

// class Point {
//   x:number
//   y:number
//   constructor(val1?:number, val2?: number ){
//       this.x = val1
//       this.y = val2
//   }
//   }
  
//   class Triangle {
//       x: Point
//       y: Point
//       z: Point 
//       constructor(x1?: number, y1?: number, x2?: number, y2?: number, x3?: number, y3?: number){

//       }
//     }

//     let point1: Point = new Point(5,6)

//     let tr0: Triangle = new Triangle()
//     let tr1: Triangle = new Triangle(1,2,3,4,5,6)

// class Point {
//   static cnt:  number = 0;
//   x: number
//   y: number
//   constructor(){
//     this.x = 0
//     this.y = 0
//     Point.cnt++
//   }
//   public static getCounter():number {
//     let x = 5
//     return x;
//   }
// }

// let point1: Point = new Point()
// console.log(Point.cnt)
// let point2: Point = new Point()

// console.log(Point.cnt)


// class ShopItem {
//   public static id: number=0;
//   public productName:string ;
//   public size: number;
//   public weight: number;
//   public price: number;
//   constructor() {
//     this.productName = ''
//     this.size =0
//     this.weight=0
//     this.price=0
//     ShopItem.id++
//   }
// }




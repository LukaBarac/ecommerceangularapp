export class Product{
    /*  constructor(id:number){
         this.id = id;
     }                               uzvicnik je umesto constructor*/
     id!:number;
     name!:string;
     price!:number;
     tags?:string[];
     favorite:boolean = false;
     stars:number = 0;
     imageUrl!:string;
 
 }
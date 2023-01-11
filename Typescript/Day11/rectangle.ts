import {Shape} from './shape';

export class Rectanngle extends Shape{
        length:number;
        breadth:number;
        area:number;

        constructor(l:number,b:number){
            super();
            this.length=l;
            this.breadth=b;
            this.area=0;
        }


    override myArea(): void {
        this.area=this.length*this.breadth;
    }

    display(){

        console.log(`
            --------------Rectangle Area------------
                Length   ::${this.length}
                Breadth  ::${this.breadth}
                Area     ::${this.area}
        `)

    }
}
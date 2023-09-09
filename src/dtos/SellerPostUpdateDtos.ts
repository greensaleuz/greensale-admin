export class LoginDto{
    title:string;
    postPhoneNumber: string;
    description:string;
    price:string;
    capacity:number;
    capacityMeasure:String;
    type:string;
    district:string;
    constructor() {
        this.title="";
        this.postPhoneNumber="";
        this.description="";
        this.price="";
        this.capacity=0;
        this.type="";
        this.district="";
        this.capacityMeasure="";
    }
}
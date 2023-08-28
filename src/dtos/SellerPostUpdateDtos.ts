export class LoginDto{
    title:String;
    postPhoneNumber: String;
    description:String;
    price:String;
    capacity:Number;
    capacityMeasure:String;
    type:String;
    district:String;
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
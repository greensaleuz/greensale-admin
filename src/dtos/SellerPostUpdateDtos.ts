export class LoginDto{
    title:String;
    postPhoneNumber: String;
    password: String;
    description:String;
    price:String;
    capacity:Number;
    capacityMeasure:String;
    type:String;
    region:String;
    district:String;
    constructor() {
        this.title="";
        this.postPhoneNumber="";
    }
}
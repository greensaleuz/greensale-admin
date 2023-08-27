import { DESTRUCTION } from "dns";

class SellerPostByIdViewModel {
   
    id: number = 0;
    fullName: string = "";
    userId: string = "";
    userPhoneNumber: string = "";
    postPhoneNumber: string = "";
    userRegion: string = "";
    categoryName: string = "";
    title: string = "";
    description: string = "";
    price: number = 0;
    capacity: number = 0;
    capacityMeasure: string = "";
    type: string = "";
    region: string = "";
    district: string = "";
    createdAt: Date = new Date();
    updatedAt: Date = new Date();
    status: number = 0;
    postImages: any[]=[];
}



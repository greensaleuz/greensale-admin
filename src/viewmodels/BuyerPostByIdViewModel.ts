
class BuyerPostByIdViewModel {
    constructor() {
        this.updatedAt = new Date();
        this.createdAt = new Date();
    }
 
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
    updatedAt: Date;
    createdAt: Date;
    status: number = 0;
    buyerPostsImages: any[]=[];
}

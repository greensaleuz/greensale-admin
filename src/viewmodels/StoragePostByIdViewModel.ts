
class StoragePostByIdViewModel {
    constructor() {
        this.updatedAt = new Date();
        this.createdAt = new Date();
        this.postImages = [new PostImage()];
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
    postImages: PostImage[];
}

// Viewmodel obyekti yaratish
let viewModel = new SellerPostByIdViewModel();

// PostImage obyekti qo'shish
viewModel.postImages.push(new PostImage(/* ma'lumotlar */));

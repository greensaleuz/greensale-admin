export class UserViewModel{
    id: Number = 0;
    firs_name: string = "";
    last_name: string = "";
    phone_number: string = "";
    phone_number_confirm: boolean = false;
    region: string = "";
    district: string = "";
    address: string = "";
    created_at: Date = new Date();
    updated_at: Date = new Date();
}
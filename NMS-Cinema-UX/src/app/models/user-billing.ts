export class UserBilling {
    address:string;
    country:string;
    state:string;
    zip:string;
    ccName:string;
    ccNumber:string;
    ccExpiration:String;
    cvv:string;


    constructor(){
        this.address="";
        this.country="";
        this.state="";
        this.zip="";
        this.ccName="";
        this.ccNumber="";
        this.ccExpiration="";
        this.cvv="";
    }

}
export class User {

    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    orderNumbers: Array<number>;

    constructor() {
        this.id = 0;
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.password = "";
        this.orderNumbers = new Array<number>();
    }

}
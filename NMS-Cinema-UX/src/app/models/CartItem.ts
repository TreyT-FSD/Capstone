import { Movie } from "./movie";

export class CartItem {
    // id: number;
    movie: Movie;
    showtime: string;
    numTickets: number;
    subTotal: number;

    constructor() {
        // this.id = 0;
        this.movie = new Movie();
        this.showtime = "";
        this.numTickets = 0;
        this.subTotal = 0;
    }
}
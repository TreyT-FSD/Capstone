import { Genre } from "./genre";

export class Movie {
    id: number;
    title: string;
    description: string;
    duration: string;
    genreId: 1;
    ticketPrice: number;
    language: string;
    showtimes: Array<string>;
    availableTickets: number;

    constructor() {
        this.id = 0;
        this.title = "";
        this.description = "";
        this.duration="";
        this.genreId = 1;
        this.ticketPrice = 0;
        this.language = "";
        this.showtimes = new Array<string>();
        this.availableTickets = 0;
    }
}
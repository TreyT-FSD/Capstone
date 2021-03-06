import { Genre } from "./genre";

export class Movie {
    id: number;
    title: string;
    description: string;
    duration: string;
    genreId: 1;
    ticketPrice: number;
    language: string;
    showtimes: string;
    availableTickets: number;
    active:boolean

    constructor() {
        this.id = 0;
        this.title = "";
        this.description = "";
        this.duration="";
        this.genreId = 1;
        this.ticketPrice = 0;
        this.language = "";
        this.showtimes = "";
        this.availableTickets = 0;
        this.active=false
    }
}
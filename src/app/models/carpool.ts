import { User } from "./user.model";

export class Carpool {
    key: string;
    departure: string;
    arrival: string;
    date: string;
    time: string;
    price: number;
    seats: number;
    user_id: string;
    user?: User
}
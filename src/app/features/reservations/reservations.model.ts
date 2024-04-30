import { Users } from "../../account/user.model";
import { Feedback } from "./feedback.model";


export interface Reservations{
  id: number;
  feedback: Feedback;
  customerId: number;
  tableId: number;
  reservationTime: Date;
  numberOfGuests: number;
  status: string;
  createdBy: Users;
  createdAt: Date;
}

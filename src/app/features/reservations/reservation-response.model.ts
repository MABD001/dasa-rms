import { Users } from "../../account/user.model";
import { Customer } from "../customer/customer.model";
import { Tables } from "../tables/tables.model";
import { Feedback } from "./feedback.model";
export interface ReservationsReponse{
  id: number;
  feedback: Feedback;
  customer: Customer;
  table: Tables;
  reservationTime: Date;
  numberOfGuests: number;
  status: string;
  createdBy: Users;


}

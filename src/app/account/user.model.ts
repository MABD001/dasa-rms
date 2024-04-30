export interface Users {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userType: number; // 1 for Admin, 2 for Manager, 3 for Waiter
  enabled: boolean;
}

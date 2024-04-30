import { Users } from '../../../account/user.model';
import { MenuItem } from '../../menuItems/menu-items/menu-item.model';

export interface Menu {
  id: number;
  description: string;
  menuItem: MenuItem[];
  createdBy: Users;
}

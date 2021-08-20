import { UserProfile } from './user-profile';

export class UserProfileData implements UserProfile {
  id: string;
  accountHolderId: string;
  title: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipCode: string;
  workPhone: string;
  cellPhone: string;
  email: string;
  role: string;

  constructor() {
    this.id = '';
    this.accountHolderId = '';
    this.title = '';
    this.firstName = '';
    this.lastName = '';
    this.address1 = '';
    this.address2 = '';
    this.city= '';
    this.state = '';
    this.zipCode = '';
    this.workPhone = '';
    this.cellPhone = '';
    this.email = '';
    this.role = '';
  }
}

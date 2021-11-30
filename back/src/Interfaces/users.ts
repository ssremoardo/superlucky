import Profile from '../Entity/Profile'
export default interface IUsers {
  id?: number;
  name: string;
  phone: string;
  celphone: string;
  email: string;
  password: string;
  id_profile?: number;
  profiles: Profile[];
  createdAt: Date;
  updatedAt: Date;
}

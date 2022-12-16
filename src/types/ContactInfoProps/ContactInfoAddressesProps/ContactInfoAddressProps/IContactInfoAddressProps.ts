import { IAddress } from '../../../IContact';

export interface IContactInfoAddressProps {
  name: string;
  addresses: IAddress[];
  activeAddressId: number;
  setActiveAddressId: (id: number) => void;
}

import { IContact } from '../../IContact';

export interface IContactInfoAddressesProps {
  contacts: IContact[];
  activeAddressId: number;
  setActiveAddressId: (id: number) => void;
}

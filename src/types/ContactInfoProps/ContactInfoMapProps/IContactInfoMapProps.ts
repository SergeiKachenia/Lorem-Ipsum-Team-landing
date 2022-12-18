import { IAddress } from '../../IContact';

export interface IContactInfoMapProps {
  activeAddressId: number;
  setActiveAddressId: (id: number) => void;
  addresses: IAddress[];
}

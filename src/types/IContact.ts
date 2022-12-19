export interface ILocation {
  lat: number;
  lon: number;
}
export interface IAddress {
  id: number;
  address: string;
  location: ILocation;
}
export interface IContact {
  id: number;
  ru: {
    name: string;
    addresses: IAddress[];
  };
  en: {
    name: string;
    addresses: IAddress[];
  };
}

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
  name: string;
  addresses: IAddress[];
}

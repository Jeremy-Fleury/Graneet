export interface City {
  id: string;
  postalCode: string;
  cityCode: string;
  cityName: string;
  routingWording: string;
}

export interface Cities {
  metropole: City[];
  outreMer: City[];
}

import { randomUUID } from "crypto";

export interface CityInput {
  postalCode: string;
  cityCode: string;
  cityName: string;
  routingWording: string;
}

export class City {
  id: string;

  postalCode: string;

  cityCode: string;

  cityName: string;

  routingWording: string;

  constructor({ postalCode, cityCode, cityName, routingWording }: CityInput) {
    this.id = randomUUID();
    this.postalCode = postalCode;
    this.cityCode = cityCode;
    this.cityName = cityName;
    this.routingWording = routingWording;
  }
}

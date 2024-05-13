import { Injectable } from '@angular/core';
import { Housinglocation } from '../Interfaces/housinglocation';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private logger: LoggerService) { }
  readonly baseUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPf2FaEwebGgeBalK54cAD14t5iAZzox69P4DQjy5Icw&s';
  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<Housinglocation[]> {
    const data = await fetch(this.url);
    this.logger.log(`Fetched ${data}.`);
    return (await data.json()) ?? [];
  }
  async getHousingLocationById(id: number): Promise<Housinglocation | undefined> {
    this.logger.log(`Started ${this.url}/${id}.`);
    const data = await fetch(`${this.url}/${id}`);
    this.logger.log(`Ended ${this.url}/${id}.`);
    return (await data.json()) ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}

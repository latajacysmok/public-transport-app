import { Depot } from "./Depot";
import { Tram } from "./Tram";

class TramDepot extends Depot<Tram> {
  constructor(name: string, street: string) {
    super(name, street);
  }

  getTotalNumberOfWagons(): number {
    return this.vehicles.reduce((total, tram) => total + tram.numberOfWagons, 0);
  }

  public override getInfo(): string {
    return super.getInfo() + `\nTotal Number of Wagons: ${this.getTotalNumberOfWagons()}`;
  }
}

export { TramDepot };
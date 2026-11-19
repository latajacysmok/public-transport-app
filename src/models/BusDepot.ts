import { Depot } from "./Depot";
import { Bus } from "./Bus";

class BusDepot extends Depot<Bus> {
  constructor(name: string, street: string) {
    super(name, street);
  }

  getTotalFuelConsumption(): number {
    return this.vehicles.reduce((total, bus) => total + bus.fuelConsumption, 0);
  }

  public override getInfo(): string {
    return super.getInfo() + `\nTotal Fuel Consumption: ${this.getTotalFuelConsumption()}`;
  }
}

export { BusDepot };
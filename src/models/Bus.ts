import { Vehicle } from "./Vehicle";
import { DepotInfo } from "./DepotInfo";


export class Bus extends Vehicle {
  private _fuelConsumption!: number;


  constructor(
    number: string,
    maxSpeed: number,
    depot: DepotInfo,
    fuelConsumption: number
  ) {
    super(number, maxSpeed, depot);
    this.fuelConsumption = fuelConsumption;
  }


  get fuelConsumption(): number {
    return this._fuelConsumption;
  }


  set fuelConsumption(newFuelConsumption: number) {
    if (newFuelConsumption < 0) {
      throw new Error("Fuel consumption cannot be negative.");
    }


    if (!Number.isFinite(newFuelConsumption)) {
      throw new Error("Fuel consumption must be a finite number.");
    }


    this._fuelConsumption = newFuelConsumption;
  }


  public override getInfo(): string {
    return super.getInfo() + `\nFuel consumption: ${this.fuelConsumption}`;
  }
}
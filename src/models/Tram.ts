import { Vehicle } from "./Vehicle";
import { DepotInfo } from "./DepotInfo";
export class Tram extends Vehicle {
  private _numberOfWagons!: number;
  constructor(
    number: string,
    maxSpeed: number,
    depot: DepotInfo,
    numberOfWagons: number
  ) {
    super(number, maxSpeed, depot);
    this.numberOfWagons= numberOfWagons;
  }
  get numberOfWagons(): number {
    return this._numberOfWagons;
  }
  set numberOfWagons(newNumberOfWagons: number) {
    if (!Number.isInteger(newNumberOfWagons)) {
      throw new Error("Number of wagons should be integer.");
    }
    if (newNumberOfWagons!== 1 && newNumberOfWagons !== 2 && newNumberOfWagons !== 3 ) {
      throw new Error("Number of wagons should be equal 1, 2 or 3.");
    }
    this._numberOfWagons= newNumberOfWagons;
  }
  public override getInfo(): string {
    return super.getInfo() + `\nNumber of wagons: ${this.numberOfWagons}`;
  }
}
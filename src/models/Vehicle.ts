import { DepotInfo } from "./DepotInfo";


export class Vehicle {
  private _number!: string;
  private _maxSpeed!: number;
  private _depot: DepotInfo;


  constructor(number: string, maxSpeed: number, depot: DepotInfo) {
    this.number = number;
    this.maxSpeed = maxSpeed;
    this._depot = depot;
  }


  get number(): string {
    return this._number;
  }


  get maxSpeed(): number {
    return this._maxSpeed;
  }


  set maxSpeed(newSpeedValue: number) {
    if (newSpeedValue <= 0) {
      throw new Error("Maximum speed must be greater than zero.");
    }


    if (!Number.isFinite(newSpeedValue)) {
      throw new Error("Maximum speed must be a finite number.");
    }


    this._maxSpeed = newSpeedValue;
  }

  set number(newNumber: string) {
    if (newNumber.trim() === "") {
      throw new Error("Vehicle number cannot be empty.");
    }

    this._number = newNumber.trim();
  }


  get depot(): DepotInfo {
    return this._depot;
  }

   assignDepot(newDepot: DepotInfo): void {
    this._depot = newDepot;
  }

  getInfo(): string {
    return `Vehicle Number: ${this._number}, Max Speed: ${this._maxSpeed} km/h, Depot: ${this._depot.name}, Street: ${this._depot.street}`;
  }
}
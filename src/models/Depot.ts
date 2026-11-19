import { Vehicle } from "./Vehicle";
import { DepotInfo } from "./DepotInfo";


export type OperationResult =
  | "success"
  | "already_exists"
  | "not_found"
  | "belongs_to_another_depot";


export class Depot<T extends Vehicle> implements DepotInfo {
  private _name!: string;
  private _street!: string;
  private _vehicles: T[] = [];


  constructor(name: string, street: string) {
    this.name = name;
    this.street = street;
  }


  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName.trim() === "") {
      throw new Error("Depot name cannot be empty.");
    }

    this._name = newName.trim();
  }


  get street(): string {
    return this._street;
  }

  set street(newStreet: string) {
    if (newStreet.trim() === "") {
      throw new Error("Depot street cannot be empty.");
    }

    this._street = newStreet.trim();
  }

  get vehicleCount(): number {
    return this._vehicles.length;
  }

  protected get vehicles(): readonly T[] {
    return [...this._vehicles];
  }

  addVehicle(vehicle: T): OperationResult {
    if (this._vehicles.includes(vehicle)) {
      return "already_exists";
    }


    if (vehicle.depot !== this) {
      return "belongs_to_another_depot";
    }


    this._vehicles.push(vehicle);
    return "success";
  }


  private removeVehicle(vehicle: T): OperationResult {
    if (
      !this._vehicles.includes(vehicle) ||
      vehicle.depot !== this
    ) {
      return "not_found";
    }


    this._vehicles = this._vehicles.filter((v) => v !== vehicle);


    return "success";
  }


  transferVehicle(
    vehicle: T,
    newDepot: Depot<T>
  ): OperationResult {
    if (
      !this._vehicles.includes(vehicle) ||
      vehicle.depot !== this
    ) {
      return "not_found";
    }

    if (newDepot === this || newDepot._vehicles.includes(vehicle)) {
      return "already_exists";
    }

    const removalResult = this.removeVehicle(vehicle);


    if (removalResult !== "success") {
      return removalResult;
    }


    vehicle.assignDepot(newDepot);


    const additionResult = newDepot.addVehicle(vehicle);


    if (additionResult !== "success") {
      vehicle.assignDepot(this);
      this._vehicles.push(vehicle);
      return additionResult;
    }


    return "success";
  }

  getVehiclesInfo(): string[] {
    return this._vehicles.map((vehicle) => vehicle.getInfo());
  }

  getInfo(): string {
    return `Depot Name: ${this._name},\n Street: ${this._street},\n Vehicle Count: ${this.vehicleCount},\n Vehicles Info: [\n${this.getVehiclesInfo().join(",\n")}\n]`;
  }
}
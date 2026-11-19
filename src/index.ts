import { OperationResult } from "./models/Depot";
import { Bus } from "./models/Bus";
import { BusDepot } from "./models/BusDepot";
import { Tram } from "./models/Tram";
import { TramDepot } from "./models/TramDepot";

let busDepotA: BusDepot = new BusDepot("Bus Depot A", "Ha-Ha street");
let busDepotB: BusDepot = new BusDepot("Bus Depot B", "Chicken Dinner street");
let bus1: Bus = new Bus("Bus 1", 100, busDepotA, 10);
let bus2: Bus = new Bus("Bus 2", 100, busDepotB, 10);

let tramDepotA: TramDepot = new TramDepot("Tram Depot A", "Frying Pan Alley");
let tramDepotB: TramDepot = new TramDepot("Tram Depot B", "Whip-Ma-Whop-Ma-Gate street");
let tram1: Tram = new Tram("Tram 1", 50, tramDepotA, 3);
let tram2: Tram = new Tram("Tram 2", 50, tramDepotB, 3);

let addBus1ToBusDepotA: OperationResult = busDepotA.addVehicle(bus1);
let addBus2ToBusDepotB: OperationResult = busDepotB.addVehicle(bus2);

let addBus1ToBusDepotAAgain: OperationResult = busDepotA.addVehicle(bus1);//ponowna próba dodania tego samego pojazdu do tego samego depot powinna zwrócić "already_exists"

console.log(`Adding Bus 1 to Depot A: ${addBus1ToBusDepotA}`); // should log "success"
console.log(`Adding Bus 2 to Depot B: ${addBus2ToBusDepotB}`); // should log "success"
console.log(`Adding Bus 1 to Depot A again: ${addBus1ToBusDepotAAgain}`); // should log "already_exists"

let addTram1ToTramDepotA: OperationResult = tramDepotA.addVehicle(tram1);
let addTram2ToTramDepotB: OperationResult = tramDepotB.addVehicle(tram2);

let transferTram1ToTramDepotBFromDepotA: OperationResult = tramDepotA.transferVehicle(tram1, tramDepotB);  // should return "success" because tram1 is assigned to tramDepotA
console.log(`Transferring Tram 1 to Depot B: ${transferTram1ToTramDepotBFromDepotA}`); // should log "success"


let tryAddBus1ToBusDepotBFromDepotB: OperationResult = busDepotB.addVehicle(bus1);// should return "belongs_to_another_depot" because bus1 is assigned to busDepotA
console.log(`Trying to add Bus 1 to Depot B: ${tryAddBus1ToBusDepotBFromDepotB}`); // should log "belongs_to_another_depot"

let tryTransferBus1ToBusDepotA: OperationResult = busDepotA.transferVehicle(bus1, busDepotA);  // should return "already_exists" because bus1 is already in busDepotA
console.log(`Trying to transfer Bus 1 to Depot A: ${tryTransferBus1ToBusDepotA}`); // should log "already_exists"

let tryTransferBus1ToBusDepotAFromDepotB: OperationResult = busDepotB.transferVehicle(bus1, busDepotA);  // should return "not_found" because bus1 is not in busDepotB
console.log(`Trying to transfer Bus 1 to Depot A from Depot B: ${tryTransferBus1ToBusDepotAFromDepotB}`); // should log "not_found"

let tryTransferBus2FromDepotAToDepotB: OperationResult = busDepotA.transferVehicle(bus2, busDepotB);  // should return "not_found" because bus2 is not in busDepotA
console.log(`Trying to transfer Bus 2 from Depot A to Depot B: ${tryTransferBus2FromDepotAToDepotB}`); // should log "not_found"

let transferBus1ToBusDepotBFromDepotA: OperationResult = busDepotA.transferVehicle(bus1, busDepotB);  // should return "success" because bus1 is assigned to busDepotA
console.log(`Transferring Bus 1 to Depot B: ${transferBus1ToBusDepotBFromDepotA}`); // should log "success"

console.log(`Bus 1 assigned to Depot B: ${bus1.depot === busDepotB}`); // should log "true"

console.log(`Bus 1 assigned to Depot A: ${bus1.depot === busDepotA}`); // should log "false"

console.log(`Count of vehicles in Depot A: ${busDepotA.vehicleCount}`); // should log "0"

console.log(`Count of vehicles in Depot B: ${busDepotB.vehicleCount}`); // should log "2"

let totalFuelConsumptionA: number = busDepotA.getTotalFuelConsumption(); // should return 0 because there are no vehicles in Depot A
let totalFuelConsumptionB: number = busDepotB.getTotalFuelConsumption(); // should return 20 because there are two vehicles in Depot B, each with a fuel consumption of 10

console.log(`Total fuel consumption in Depot A: ${totalFuelConsumptionA}`); // should log "0"
console.log(`Total fuel consumption in Depot B: ${totalFuelConsumptionB}`); // should log "20"

let numberOfWagonsA: number = tramDepotA.getTotalNumberOfWagons(); // should return 0 because there are no vehicles in Depot A
let numberOfWagonsB: number = tramDepotB.getTotalNumberOfWagons(); // should return 6 because there are two vehicles in Depot B, each with 3 wagons

console.log(`Total number of wagons in Depot A: ${numberOfWagonsA}`); // should log "0"
console.log(`Total number of wagons in Depot B: ${numberOfWagonsB}`); // should log "6"

console.log(busDepotB.getInfo());
console.log(tramDepotB.getInfo());
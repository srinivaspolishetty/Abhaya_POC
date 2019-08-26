export class Vehicle {

  public vehicleId: number;
  public vehicleName: string;
  public rcNumber: string;
  public registrationDate: Date;
  public ownerName: string;
  public ownerContactNumber: string;
  public createdDate: Date;
  public cityName: string;
  public serialNumber: string;
  public isOwner: boolean;
  public isDeviceMapped: boolean;
  public cityId: number;
  public districtId: number;
  public districtName: string;
  public rcExpiryDate: Date;
  public stateId: number;
  public stateName: string;
  public deviceMappedDate: Date;

  constructor(vehicleId: number, vehicleName: string, rcNumber: string, registrationDate: Date, ownerName: string,
              ownerContactNumber: string, createdDate: Date, cityName: string, serialNumber: string, isOwner: boolean,
              isDeviceMapped: boolean, cityId: number, districtId: number, districtName: string, rcExpiryDate: Date,
              stateId: number, stateName: string, deviceMappedDate: Date) {
    this.vehicleId = vehicleId;
    this.vehicleName = vehicleName;
    this.rcNumber = rcNumber;
    this.registrationDate = registrationDate;
    this.ownerName = ownerName;
    this.ownerContactNumber = ownerContactNumber;
    this.createdDate = createdDate;
    this.cityName = cityName;
    this.serialNumber = serialNumber;
    this.isOwner = isOwner;
    this.isDeviceMapped = isDeviceMapped;
    this.cityId = cityId;
    this.districtId = districtId;
    this.districtName = districtName;
    this.rcExpiryDate = rcExpiryDate;
    this.stateId = stateId;
    this.stateName = stateName;
    this.deviceMappedDate = deviceMappedDate;
  }
}

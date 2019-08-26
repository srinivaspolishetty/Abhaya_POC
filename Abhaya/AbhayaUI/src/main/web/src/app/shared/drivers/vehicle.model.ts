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

  constructor(vehicleId: number = 0, vehicleName: string = '', rcNumber: string, registrationDate: Date= new Date(), ownerName: string = '',
              ownerContactNumber: string = '', createdDate: Date = new Date(), cityName: string = '', serialNumber: string = '', isOwner: boolean = false,
              isDeviceMapped: boolean = false, cityId: number = 0, districtId: number = 0, districtName: string = '', rcExpiryDate: Date = new Date(),
              stateId: number = 0, stateName: string = '', deviceMappedDate: Date = new Date()) {
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

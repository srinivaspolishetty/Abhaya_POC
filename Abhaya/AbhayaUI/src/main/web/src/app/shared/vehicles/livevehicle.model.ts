
export class LiveVehicle {
    public serialNumber: string;
    public rcNumber: string;
    public createdDate: Date;
    public packetDate: string;
    public packetTime: string;
    public latitude: number;
    public langitude: number;
    public location: string;
    public imeiNumber: number;
    public status: string;
    public stateId: number;
    public stateName: string;
    public districtId: number;
    public districtName: string;
    public cityId: number;
    public cityName: string;
    public movement: string;
    public batteryStatus: string;
    public ignitionStatus: string;
    public engineStatus: string;
    public tamperStatus: string;
    public panicButtonStatus: string;
    public prevPacketTime: string;
    public prevPacketDate: string;
    public prevLatitude: number;
    public prevLangitude: number;

    public image: string;

    constructor() { }

}

export class TripTracking {

    public sourceId: number;
    public latitude: string;
    public langitude: string;
    public time: string;
    public hdop: string;
    public altitude: string;
    public fix: string;
    public cog: string;
    public spkm: string;
    public spkn: string;
    public date: Date;
    public nsat: string;
    public createdDate: Date;
    public packetTime: string;
    public packetDate: Date;
    public imeiNumber: string;
    public serialNumber: string;
    public location: string;

    constructor(sourceId: number, latitude: string, langitude: string, time: string, hdop: string, altitude: string, fix: string, cog: string,
        spkm: string, spkn: string, date: Date, nsat: string, createdDate: Date, packetTime: string, packetDate: Date, imeiNumber: string,
        serialNumber: string, location: string) {
        this.sourceId = sourceId;
        this.latitude = latitude;
        this.langitude = langitude;
        this.time = time;
        this.hdop = hdop;
        this.altitude = altitude;
        this.fix = fix;
        this.cog = cog;
        this.spkm = spkm;
        this.spkn = spkn;
        this.date = date;
        this.nsat = nsat;
        this.createdDate = createdDate;
        this.packetTime = packetTime;
        this.packetDate = packetDate;
        this.imeiNumber = imeiNumber;
        this.serialNumber = serialNumber;
        this.location = location;
    }

}
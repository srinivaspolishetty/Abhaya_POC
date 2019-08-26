export class PanicSummary {
    public eventSource: string;
    public isClosed: boolean;
    public count: number;
    public cityId: number;
    public districtId: number;
    public stateId: number;
    public openCount: number;
    public closedCount: number;
    constructor() {
        this.openCount = 0;
        this.closedCount = 0;
    }
}

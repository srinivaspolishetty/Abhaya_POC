export class HorizontalBarChart {

    public view: Number[];

    public showXAxis: boolean;

    public showYAxis: boolean;

    public gradient: boolean;

    public showLegend: boolean;

    public showXAxisLabel: boolean;

    public showYAxisLabel: boolean;

    public showDataLabel: boolean;

    public xAxisLabel: string;

    public yAxisLabel: string;

    public colorScheme: {};

    public data: {}[];

    constructor(view: Number[], showXAxis: boolean, showYAxis: boolean, gradient: boolean, showLegend: boolean,
        showXAxisLabel: boolean, showYAxisLabel: boolean, showDataLabel: boolean, xAxisLabel: string, yAxisLabel: string) {

        this.view = view;

        this.showXAxis = showXAxis;

        this.showYAxis = showYAxis;

        this.gradient = gradient;

        this.showLegend = showLegend;

        this.showXAxisLabel = showXAxisLabel;

        this.showYAxisLabel = showYAxisLabel;

        this.showDataLabel = showDataLabel;

        this.xAxisLabel = xAxisLabel;

        this.yAxisLabel = yAxisLabel;
    }
}

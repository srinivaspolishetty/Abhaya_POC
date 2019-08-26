export class PieChart {

    public view: Number[];
    public showLegend: boolean;
    public explodeSlices: boolean;
    public showLabels: boolean;
    public doughnut: boolean;
    public gradient: boolean;
    public legendPosition: string;
    public arcWidth: string;
    public legendTitle: string;

    public colorScheme: {};
    public data: {}[];

    constructor(view: Number[], showLegend: boolean, explodeSlices: boolean, showLabels: boolean, doughnut: boolean, gradient: boolean,
        legendPosition: string, arcWidth: string, legendTitle: string) {
            this.view = view;
            this.showLegend = showLegend;
            this.explodeSlices = explodeSlices;
            this.showLabels = showLabels;
            this.doughnut = doughnut;
            this.gradient = gradient;
            this.legendPosition = legendPosition;
            this.arcWidth = arcWidth;
            this.legendTitle = legendTitle;
    }

}

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_material from '@amcharts/amcharts4/themes/material';

const pieChartTemplate = require('./piechart.html');



  class pieChartComponentController implements ng.IComponentController {
    private chart: am4charts.PieChart;
    private legendContainer: am4core.Container;
    private data = [{
        "country": "Lithuania",
        "litres": 501.9
      }, {
        "country": "Czech Republic",
        "litres": 301.9
      }, {
        "country": "Ireland",
        "litres": 201.1
      }, {
        "country": "Germany",
        "litres": 165.8
      }, {
        "country": "Australia",
        "litres": 139.9
      }, {
        "country": "Austria",
        "litres": 128.3
      }, {
        "country": "UK",
        "litres": 99
      }, {
        "country": "Belgium",
        "litres": 60
      }, {
        "country": "The Netherlands",
        "litres": 50
      },{
        "country": "Lithuania",
        "litres": 501.9
      }, {
        "country": "Czech Republic",
        "litres": 301.9
      }, {
        "country": "Ireland",
        "litres": 201.1
      }, {
        "country": "Germany",
        "litres": 165.8
      }, {
        "country": "Australia",
        "litres": 139.9
      }, {
        "country": "Austria",
        "litres": 128.3
      }, {
        "country": "UK",
        "litres": 99
      }, {
        "country": "Belgium",
        "litres": 60
      }, {
        "country": "The Netherlands",
        "litres": 50
      }];
    constructor() {}
    
    public $onInit () {
        am4core.useTheme(am4themes_material)
        this.chart = am4core.create('chartdiv', am4charts.PieChart);
        let pieSeries = this.chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "country";
        pieSeries.labels.template.disabled = true;
        pieSeries.ticks.template.disabled = true;
        this.chart.data = this.data;
        this.chart.legend = new am4charts.Legend();
        this.legendContainer = am4core.create('legenddiv', am4core.Container);
        
        this.legendContainer.width = am4core.percent(100);
        this.legendContainer.height = am4core.percent(100);
        this.chart.legend.parent = this.legendContainer

  
        

    }
    public $onDestroy(){
        this.chart.dispose();
    }
  }
  
  export class pieChartComponent implements ng.IComponentOptions {
  
    public controller: ng.Injectable<ng.IControllerConstructor>;
    public controllerAs: string;
    public template: string;
  
    constructor() {
      this.controller = pieChartComponentController;
      this.controllerAs = "$ctrl";
      this.template = pieChartTemplate;
    }
  }
  
 

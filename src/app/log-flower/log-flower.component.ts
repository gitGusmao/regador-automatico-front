import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlowerService } from '../services/flower.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-log-flower',
  templateUrl: './log-flower.component.html',
  styleUrls: ['./log-flower.component.css'],
})
export class LogFlowerComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [];

  deviceUUID: String = '';
  regadorID: String = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private flowerService: FlowerService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let deviceUUID = params['deviceUUID'];
      let id = params['id'];

      this.deviceUUID = params['deviceUUID'];
      this.regadorID = params['id'];

      this.verificarHistorico(deviceUUID, id);
    });
  }

  verificarHistorico(deviceUUID: string, id: string) {
    this.flowerService.findLogFlower(deviceUUID, id).subscribe((data) => {
      let log: any[] = data.body.map((p: any) => p.porcentagem);
      let date: any[] = data.body.map((p: any) => {
        return (
          new Date(p.horario).toLocaleDateString('pt-BR') +
          ' - ' +
          new Date(p.horario).toLocaleTimeString('pt-BR')
        );
      });

      this.barChartData = [
        {
          label: 'Umidade',
          data: log,
        },
      ];

      this.barChartLabels = date;
    });
  }
}

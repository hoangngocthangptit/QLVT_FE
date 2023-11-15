import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialalogDeleteComponent } from 'app/dialalog-delete/dialalog-delete.component';
import Swal from 'sweetalert2';
import { MainService } from 'app/Service/main.service';
import * as Chartist from 'chartist';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(   private khoService: MainService,) { }
  kho:number;
  pn:number;
  px:number;
  vt:number;
  nhapXuatList: any[] = [];
  tkNhap: any[] = [];
  tkXuat: any[] = [];


  ngOnInit() {
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
      this.khoService.getAllPhieuNhap().subscribe((res: any) => {
        this.pn = res.obj.length; 
      });
      this.khoService.getAllPhieuXuat().subscribe((res: any) => {
        this.px = res.obj.length; 
      });
      this.khoService.getAllKho().subscribe((res: any) => {
        this.kho = res.obj.length; 
      });
      this.khoService.getAllVatTu().subscribe((res: any) => {
        this.vt = res.obj.length; 
      });
      this.khoService.getThongKeNhapXuat().subscribe((res: any) => {
        this.nhapXuatList = res.obj; 
      });
      forkJoin([
    
        this.khoService.getThongKeNhapTheoThang(),
        this.khoService.getThongKeXuatTheoThang()
      ]).subscribe((results: any[]) => {
        this.tkNhap = results[0].obj;
        this.tkXuat = results[1].obj;
        const listA: number[] = Array.from({ length: 12 }, () => 0);
        this.tkNhap.forEach(item => {
          if (item.thang >= 1 && item.thang <= 12 && item.nam === 2023) {
            listA[item.thang - 1] = (item.tongDonGiaNhap)/1000000;
          }
        });
      const dataDailySalesChart: any = {
        labels: [ '6', '7', '8', '9', '10', '11', '12'],
          series: [
              [listA[5] , listA[6] , listA[7] , listA[8] , listA[9] , listA[10] , listA[11] ]
          ]
      };

     const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 500, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);


      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      const dataCompletedTasksChart: any = {
          labels: ['5', '6', '7', '8', '9', '10', '11', '12'],
          series: [
              [listA[4],listA[5] , listA[6] , listA[7] , listA[8] , listA[9] , listA[10] , listA[11] ]
          ]
      };

     const optionsCompletedTasksChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 500, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      }

      var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      this.startAnimationForLineChart(completedTasksChart);



      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      const listB: number[] = Array.from({ length: 12 }, () => 0);
      this.tkXuat.forEach(item => {
        if (item.thang >= 1 && item.thang <= 12 && item.nam === 2023) {
          listB[item.thang - 1] = (item.tongDonGiaXuat)/1000000;
        }
      });
      var datawebsiteViewsChart = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        series: [
          [listB[0], listB[1], listB[2], listB[3], listB[4], listB[5], listB[6], listB[7], listB[8], listB[9], listB[10], listB[11]]
        ]
      };
      var optionswebsiteViewsChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 500,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      var responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
      this.startAnimationForBarChart(websiteViewsChart);
    });
  }
  startAnimationForBarChart(chart){
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function(data) {
      if(data.type === 'bar'){
          seq2++;
          data.element.animate({
            opacity: {
              begin: seq2 * delays2,
              dur: durations2,
              from: 0,
              to: 1,
              easing: 'ease'
            }
          });
      }
    });

    seq2 = 0;
};
  startAnimationForLineChart(chart){
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', function(data) {
      if(data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if(data.type === 'point') {
            seq++;
            data.element.animate({
              opacity: {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
    });

    seq = 0;
};
  formatCurrency(value: number): string {
    // Kiểm tra nếu value không phải là số
    if (isNaN(value)) {
      return 'Invalid value';
    }

    // Sử dụng toLocaleString để định dạng số tiền
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
    });
  }

}

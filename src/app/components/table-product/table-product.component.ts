import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CrawlService } from 'app/Service/crawl.service';
import { DialalogDeleteComponent } from 'app/dialalog-delete/dialalog-delete.component';
import { Router } from 'express';
export interface PeriodicElement {
  position: number;
  ten: string;
  mieuTa: string;
  heSo: string;

}
const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.scss']
})

export class TableProductComponent implements OnInit {

  public get userService(): CrawlService {
    return this.bookService;
  }
  public set userService(value: CrawlService) {
    this.bookService = value;
  }
  constructor(    
    private dialog: MatDialog,

    private bookService: CrawlService,

    private route: Router,
    ) { }

  ngOnInit(): void {
    this.doSearh();

  }
  opened = true;
  public opened2 = false;
  isUser = false;
  isSeller = false;
  isAdmin = true;
 
  email:any;
  pageSize:number=10;
  page: number = 0;
  totalItems: number = 0;
  dataSource: any = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  name: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  openEditForm(){}
  doSearh() {
this.bookService.getAll().subscribe((res:any) => {
  this.dataSource = new MatTableDataSource(res);
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
});

  }
  deleteDilag(id:number){
    if (localStorage.getItem('token') === null) {
      // this.route.navigateByUrl('login');
      return;
    }
    const dialogRef = this.dialog.open(DialalogDeleteComponent, {
      width: "auto",
      height: "auto",
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }
  onChangePage(event: any) {

  }
  nameEventHander($event: any) {
    this.opened2 = $event;
    console.log("2", this.opened2);
  }
  openAddEditEmpForm(){}
  displayedColumns: string[] = ['position', 'ten','mieuTa', 'heSo', 'thaoTac'];
}

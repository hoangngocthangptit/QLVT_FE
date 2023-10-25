import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CrawlService } from 'app/Service/crawl.service';
import { DialalogDeleteComponent } from 'app/dialalog-delete/dialalog-delete.component';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
export interface PeriodicElement {
  position: number;
  ten: string;
  mieuTa: string;
  heSo: string;

}
const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  public get userService(): CrawlService {
    return this.bookService;
  }
  public set userService(value: CrawlService) {
    this.bookService = value;
  }
  

  role: string;
  opened = true;
  public opened2 = false;
  isUser = false;
  isSeller = false;
  isAdmin = true;
  isLogin = false;
  email:any;
  link: string = '';
  pageSize:number=10;
  page: number = 0;
  totalItems: number = 0;
  dataSource: any = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  name: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(    
    private dialog: MatDialog,

    private bookService: CrawlService,

    private route: Router,
    ) { }

  ngOnInit(): void {
    this.role = localStorage.getItem("role");
    console.log("role check toolbar", this.role);
    if (this.role === "admin") {
      this.isAdmin = true;
      this.isLogin = true;
    }
    this.doSearh();

  }
  openEditForm(){}
  doSearh() {
    if(this.isLogin===false) { this.route.navigateByUrl('login');}
this.bookService.getAll().subscribe((res:any) => {
  this.dataSource = new MatTableDataSource(res.obj);
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
        this.userService.delete(id).subscribe((message) => {


          Swal.fire({
            icon: "success",
            title: "đã xóa",
        });
          this.doSearh();

      });
      }
    });
  }


  crawl(path){
    console.log("nhạn link",path);
    
  this.bookService.crawl(path).subscribe(
    response => {
      console.log('Crawl thành công:', response);
      localStorage.setItem('link',path);
      this.route.navigateByUrl('table-list');
      // this.route.navigate(['/table-list'], { queryParams: { link: this.link } });
    },
    error => {
      console.error('Lỗi khi crawl:', error);
    }
  );
  }
  onChangePage(event: any) {

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  nameEventHander($event: any) {
    this.opened2 = $event;
    console.log("2", this.opened2);
  }
  openAddEditEmpForm(){}
  displayedColumns: string[] = ['position', 'name','image', 'thaoTac'];
}

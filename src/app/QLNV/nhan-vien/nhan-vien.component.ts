import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialalogDeleteComponent } from 'app/dialalog-delete/dialalog-delete.component';
import Swal from 'sweetalert2';
import { MainService } from 'app/Service/main.service';
import { EditNvComponent } from '../edit-nv/edit-nv.component';

export interface PeriodicElement {
  position: number;
  ten: string;
  mieuTa: string;
  heSo: string;
}
const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-nhan-vien',
  templateUrl: './nhan-vien.component.html',
  styleUrls: ['./nhan-vien.component.scss']
})
export class NhanVienComponent implements OnInit {

  constructor(private dialog: MatDialog,
    private khoService: MainService,
    private route: Router) { }
  public get userService(): MainService {
    return this.khoService;
  }
  dataSource: any = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  name: string;
  pageSize: number = 10;
  page: number = 0;
  totalItems: number = 0;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort
  ngOnInit(): void {
    this.doSearh();
  }
  doSearh() {
    this.khoService.getAllNV().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res.obj);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  onChangePage(event: any) {
    this.pageSize = event.pageSize;
    this.page = event.pageIndex;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteDilag(id: number) {
    // if (localStorage.getItem('token') === null) {
    //   // this.route.navigateByUrl('login');
    //   return;
    // }
    const dialogRef = this.dialog.open(DialalogDeleteComponent, {
      width: "auto",
      height: "auto",
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userService.deleteKho(id).subscribe((message) => {
          Swal.fire({
            icon: "success",
            title: "đã xóa",
          });
          this.doSearh();
        });
      }
    });
  }

  openEditForm(data: any) {
    const dialogRef = this.dialog.open(EditNvComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.doSearh();
        }
      },
    });
  }

  displayedColumns: string[] = ['position','email' , 'ma','name', 'diaChi','role','chiNhanh','trangThai', 'actions'];

}

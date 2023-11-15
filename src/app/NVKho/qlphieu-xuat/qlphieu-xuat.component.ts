import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialalogDeleteComponent } from 'app/dialalog-delete/dialalog-delete.component';
import Swal from 'sweetalert2';
import { MainService } from 'app/Service/main.service';
import { EditAddPhieunhapComponent } from '../edit-add-phieunhap/edit-add-phieunhap.component';
import { EditAddPhieuxuatComponent } from '../edit-add-phieuxuat/edit-add-phieuxuat.component';
export interface PeriodicElement {
  position: number;
  ten: string;
  mieuTa: string;
  heSo: string;
}
const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-qlphieu-xuat',
  templateUrl: './qlphieu-xuat.component.html',
  styleUrls: ['./qlphieu-xuat.component.scss']
})
export class QLPhieuXuatComponent implements OnInit {

  constructor(private dialog: MatDialog,
    private khoService: MainService,
    private route: Router) { }
  public get userService(): MainService {
    return this.khoService;
  }
  public set userService(value: MainService) {
    this.khoService = value;
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
    this.khoService.getAllPhieuXuat().subscribe((res: any) => {
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
        this.userService.deletePhieuXuat(id).subscribe((message) => {
          Swal.fire({
            icon: "success",
            title: "đã xóa",
          });
          this.doSearh();
        });
      }
    });
  }
  addForm() {
    const dialogRef = this.dialog.open(EditAddPhieuxuatComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.doSearh();
        }
      },
    });
  }
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
  
  openEditForm(data: any) {
    const dialogRef = this.dialog.open(EditAddPhieunhapComponent, {
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

  displayedColumns: string[] = ['position', 'name', 'diaChi','maNV','maVT','soluong','kho','dongia', 'actions'];

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CrawlService } from 'app/Service/crawl.service';
import { DialalogDeleteComponent } from 'app/dialalog-delete/dialalog-delete.component';
import { Router } from '@angular/router';
import { ProductDetailComponent } from 'app/components/product-detail/product-detail.component';
import { ActivatedRoute } from '@angular/router';
import Swal from "sweetalert2";
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  public get userService(): CrawlService {
    return this.crawlService;
  }
  public set userService(value: CrawlService) {
    this.crawlService = value;
  }
  opened = true;
  public opened2 = false;
  isUser = false;
  isSeller = false;
  isAdmin = true;
  link: string = '';
  email:any;
  pageSize:number=10;
  zoomed: boolean = false;
  selectedImageClicked: boolean = false;
  zoomedImage: string;
  page: number = 0;
  totalItems: number = 0;
  loading = false;
  selectedItemInfo: [
    // Dữ liệu các item
  ]; 
  selectedItem: any = null;
  itemList = [
    // Dữ liệu các item
  ];
  displayedColumns: string[] = [
    "position",
    "name",
    "price",
    "title",
    "image",
    "thaoTac"
  ];
  dataSource!: MatTableDataSource<any>;
  data :any;
  name: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private route: Router,
    private routes: ActivatedRoute,

    private crawlService:CrawlService,
    private dialog: MatDialog,
  ) {}
  isLogin = false;
  role: string;
  ngOnInit(): void {
    this.link = localStorage.getItem("link");
    this.role = localStorage.getItem("role");
    console.log("role check toolbar", this.role);
    if (this.role === "admin") {
      this.isAdmin = true;
      this.isLogin = true;
    }
    this.doSearh(this.link);

  }
  crawl(){
    this.loading = true;
    console.log("nhạn link",this.link);
  this.crawlService.crawl(this.link).subscribe(
    response => {
      console.log('Crawl thành công:', response);
      localStorage.setItem('link',this.link);
      this.loading = false;
      this.doSearh(this.link);
      this.zoomed = false;
      // this.route.navigate(['/table-list'], { queryParams: { link: this.link } });
    },
    error => {
      this.loading = false;
      console.error('Lỗi khi crawl:', error);
    }
  );
  }
    Deatails(data: any) {
    const dialogRef = this.dialog.open(ProductDetailComponent, {
      height: '80%',
      width: '70%',
      data
  });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
         
        }
      },
    });
  }
  nameEventHander($event: any) {
    this.opened2 = $event;
    console.log("2", this.opened2);
  }

  
  zoomImage(image: string) {
    this.zoomed = true;
    this.zoomedImage = image;
  }
  
  closeZoomed() {
    this.zoomed = false;
  }
  doSearh(link) {
    if(this.isLogin===false) { this.route.navigateByUrl('login');}
    // this.route.navigateByUrl('login');
    this.userService.getDetail(link).subscribe((res:any) => {
      this.data = res.obj;
    },(error) => {
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Nhập không đúng link",
       
      });
    }
    );
    
    if (!this.zoomed && this.data.images.length > 0) {
      this.zoomImage(this.data.images[0]);
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
    openAddEditEmpForm() {

  }
  
  showDetails(image: any){
 
    this.selectedItem = image;
    this.selectedImageClicked = true;

  }
  deleteDilag(id:number){
    if (localStorage.getItem('token') === null) {

      this.route.navigateByUrl('login');
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
           

        });
      }
    });
  }
  onChangePage(event: any) {
    this.pageSize = event.pageSize;
    this.page = event.pageIndex;

  }

}



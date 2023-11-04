import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MainService } from 'app/Service/main.service';
import { CoreService } from 'app/core/core.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-add-phieunhap',
  templateUrl: './edit-add-phieunhap.component.html',
  styleUrls: ['./edit-add-phieunhap.component.scss']
})
export class EditAddPhieunhapComponent implements OnInit {
  empForm: FormGroup;
  public  listKho = [];
  public  listNV = [];
  public  listVT = [];
  selectedDate: Date;
  dateString: string;
    // education: string[] = [
    //   'x',
    //   'Diploma',
    //   'Intermediate',
    //   'Graduate',
    //   'Post Graduate',
    // ];
  
    constructor(
      private _fb: FormBuilder,
      private _empService: MainService,
      private _dialogRef: MatDialogRef<EditAddPhieunhapComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private khoService: MainService,
    ) {
      this.empForm = this._fb.group({
        tenKho: '',
        maKho: '',
        maNV: '',
        ngay: '',
        dob:'',
        ctpx: [
          {
            soLuong: '',
            donGia: '',
            maVT: ''
          }
        ]
  
        // gender: '',
        // education: '',
        // company: '',
        // experience: '',
        // package: '',
      });
    }
  
    ngOnInit(): void {
      this.empForm.patchValue(this.data);
      this.listChiNhanh();
    }
  listChiNhanh(){
   this.khoService.getAllKho().subscribe((res: any) => {
      this.listKho = res.obj;
    });
    this.khoService.getAllVatTu().subscribe((res: any) => {
      this.listVT = res.obj;
    });
    this.khoService.getAllNV().subscribe((res: any) => {
      this.listNV = res.obj;
    });
  }
    onFormSubmit() {
      if (this.empForm.valid) {
        if (this.data) {
          this._empService
            .updateKho(this.data.maKho, this.empForm.value)
            .subscribe({
              next: (val: any) => {
                Swal.fire({
                  icon: "success",
                  title: "Sửa thành công",
                });
                this._dialogRef.close(true);
              },
              error: (err: any) => {
                console.error(err);
              },
            });
        } else {
          this._empService.addKho(this.empForm.value).subscribe({
            next: (val: any) => {
              Swal.fire({
                icon: "success",
                title: "Thêm thành công",
              });
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
        }
      }
    }


}

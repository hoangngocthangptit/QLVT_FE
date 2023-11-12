import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MainService } from 'app/Service/main.service';
import { CoreService } from 'app/core/core.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-add-phieuxuat',
  templateUrl: './edit-add-phieuxuat.component.html',
  styleUrls: ['./edit-add-phieuxuat.component.scss']
})
export class EditAddPhieuxuatComponent implements OnInit {

  empForm: FormGroup;
  public listKho = [];
  public listNV = [];
  public listVT = [];
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
    private _dialogRef: MatDialogRef<EditAddPhieuxuatComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private khoService: MainService,
  ) {
    this.empForm = this._fb.group({
      maKho: ['', Validators.required],
      maNV: ['', Validators.required],
      ngay: ['', Validators.required],
      ctpx: this._fb.array([this.createCtpx()])

      // gender: '',
      // education: '',
      // company: '',
      // experience: '',
      // package: '',
    });
  }
  addCtpx() {
    const ctpxArray = this.empForm.get('ctpx') as FormArray;
    ctpxArray.push(this.createCtpx());
  }
  createCtpx(): FormGroup {
    return this._fb.group({
      soLuong: [null, Validators.required],  // Kiểu dữ liệu là số nguyên
      donGia: [null, Validators.required],
      maVT: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
    this.listChiNhanh();
  }
  listChiNhanh() {
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
          .updatePhieuXuat(this.data.maPX, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              if (val.statusCode === 200) {
                Swal.fire({
                  icon: "success",
                  title: "Sửa thành công",
                });
                this._dialogRef.close(true);
              } else {
                Swal.fire({
                  icon: "error",
                  title: val.message,
                });
              }
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      }
      else {
        this._empService.addPhieuXuat(this.empForm.value).subscribe({
          next: (val: any) => {
            if (val.statusCode === 200) {
              Swal.fire({
                icon: "success",
                title: "Thêm thành công",
              });
              this._dialogRef.close(true);
            } else {
              Swal.fire({
                icon: "error",
                title: val.message,
              });
            }
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}

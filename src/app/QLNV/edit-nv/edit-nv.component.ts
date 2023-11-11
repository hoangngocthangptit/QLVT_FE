import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MainService } from 'app/Service/main.service';
import { CoreService } from 'app/core/core.service';
import { log } from 'console';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-nv',
  templateUrl: './edit-nv.component.html',
  styleUrls: ['./edit-nv.component.scss']
})
export class EditNvComponent implements OnInit {
  empForm: FormGroup;
  public chiNhanhs = [];
  public pass = undefined;
  constructor(
    private _fb: FormBuilder,
    private _empService: MainService,
    private _dialogRef: MatDialogRef<EditNvComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private khoService: MainService,
  ) {
    this.empForm = this._fb.group({
      hoTen: '',
      sdt: '',
      diaChi: '',
      role: '',
      trangThai: '',
      password: '',
      pass: ''
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
  onFormSubmit() {
    if (this.empForm.value.pass != undefined && this.empForm.value.pass != '') {
      this.empForm.value.password = this.empForm.value.pass;
    }
    this._empService
      .updateNV(this.data.userId, this.empForm.value)
      .subscribe({
        next: (val: any) => {
          Swal.fire({
            icon: "success",
            title: "Cập nhật thông tin thành công",
          });
          this._dialogRef.close(true);
        },
        error: (err: any) => {
          console.error(err);
        },
      });
  }
  listChiNhanh() {
    this.khoService.getAllChiNhanh().subscribe((res: any) => {
      this.chiNhanhs = res.obj;
    });
  }

}

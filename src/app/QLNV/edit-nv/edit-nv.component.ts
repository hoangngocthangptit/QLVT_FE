import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      hoTen:  ['', Validators.required],
      sdt:  ['', Validators.required],
      diaChi: '',
      role: '',
      trangThai:  ['', Validators.required],
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
          if (val.statusCode === 200) {
            Swal.fire({
              icon: "success",
              title: "Thêm thành công",
            });
            this._dialogRef.close(true);
          } else {
            Swal.fire({
              icon: "error",
              title: val.statusCode,
            });
          }
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

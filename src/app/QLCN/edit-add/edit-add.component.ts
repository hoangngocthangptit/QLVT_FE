import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MainService } from 'app/Service/main.service';
import { CoreService } from 'app/core/core.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-add',
  templateUrl: './edit-add.component.html',
  styleUrls: ['./edit-add.component.scss']
})
export class EditAddComponentChiNhanh implements OnInit {
  empForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _empService: MainService,
    private _dialogRef: MatDialogRef<EditAddComponentChiNhanh>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.empForm = this._fb.group({
      chiNhanh: '',
      sdt: '',
      diaChi: '',
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._empService
          .updateChiNhanh(this.data.maCN, this.empForm.value)
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
        this._empService.addChiNhanh(this.empForm.value).subscribe({
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

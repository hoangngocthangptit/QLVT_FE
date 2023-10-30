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
export class EditAddComponentKho implements OnInit {

  empForm: FormGroup;


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
      private _dialogRef: MatDialogRef<EditAddComponentKho>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private _coreService: CoreService
    ) {
      this.empForm = this._fb.group({
        tenKho: '',
        maCN: '',
        diaChi: '',
  
        // gender: '',
        // education: '',
        // company: '',
        // experience: '',
        // package: '',
      });
    }
  
    ngOnInit(): void {
      this.empForm.patchValue(this.data);
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



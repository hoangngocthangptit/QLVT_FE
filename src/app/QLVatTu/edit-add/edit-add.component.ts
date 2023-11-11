import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MainService } from 'app/Service/main.service';
import { CoreService } from 'app/core/core.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-add',
  templateUrl: './edit-add.component.html',
  styleUrls: ['./edit-add.component.scss']
})
export class EditAddComponentVatTu implements OnInit {
  empForm: FormGroup;
  public  listNCC = [];
  constructor(
    private _fb: FormBuilder,
    private _empService: MainService,
    private _dialogRef: MatDialogRef<EditAddComponentVatTu>,

    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.empForm = this._fb.group({
      dvt: ['', Validators.required],
      soLuongTon: '',
      tenVT: ['', Validators.required],
      maNCC:['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
    this.listChiNhanh();
  }
  
  listChiNhanh(){
    this._empService.getAllNhaCungCap().subscribe((res: any) => {
       this.listNCC = res.obj;
     });
   }
  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._empService
          .updateVatTu(this.data.maVT, this.empForm.value)
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
        this._empService.addVatTu(this.empForm.value).subscribe({
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

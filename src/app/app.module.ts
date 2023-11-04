import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponentComponent } from './auth/login-component/login-component.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule } from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { RECAPTCHA_SETTINGS, RECAPTCHA_V3_SITE_KEY, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings, RecaptchaV3Module } from "ng-recaptcha";
import { environment } from 'environments/environment';
import { TableListComponent } from './table-list/table-list.component';
import { DialalogDeleteComponent } from './dialalog-delete/dialalog-delete.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ToolbarUserComponent } from './components/toolbar-user/toolbar-user.component';
import { TableProductComponent } from './components/table-product/table-product.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { TypographyComponent } from './typography/typography.component';
import { EditAddComponentKho } from './QLKho/edit-add/edit-add.component';
import { KhoComponent } from './QLKho/kho/kho.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { QLChiNhanhComponent } from './QLCN/qlchi-nhanh/qlchi-nhanh.component';
import { EditAddComponentChiNhanh } from './QLCN/edit-add/edit-add.component';
import { NhanVienComponent } from './QLNV/nhan-vien/nhan-vien.component';
import { EditNvComponent } from './QLNV/edit-nv/edit-nv.component';
import { QLVatTuComponent } from './QLVatTu/qlvat-tu/qlvat-tu.component';
import { EditAddComponentVatTu } from './QLVatTu/edit-add/edit-add.component';
import { QLPhieuNhapComponent } from './NVKho/qlphieu-nhap/qlphieu-nhap.component';
import { QLPhieuXuatComponent } from './NVKho/qlphieu-xuat/qlphieu-xuat.component';
import { EditAddPhieunhapComponent } from './NVKho/edit-add-phieunhap/edit-add-phieunhap.component';
import { EditAddPhieuxuatComponent } from './NVKho/edit-add-phieuxuat/edit-add-phieuxuat.component';
import { ListNCCComponent } from './QLNCC/list-ncc/list-ncc.component';
import { EditAddNccComponent } from './QLNCC/edit-add-ncc/edit-add-ncc.component';
// import { NgImageSliderModule } from 'ng-image-slider';
// import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    
    // NgImageSliderModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatDividerModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatDatepickerModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    RecaptchaModule,
    MatIconModule,
    MatPaginatorModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatTableModule,
   
    
   


  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponentComponent,
    RegistrationComponent,
    TableListComponent,
    KhoComponent,
    DialalogDeleteComponent,
    ProductDetailComponent,
    ToolbarUserComponent,
    TableProductComponent,
    UpgradeComponent,
    TypographyComponent,
    EditAddComponentKho,
    QLChiNhanhComponent,
    EditAddComponentChiNhanh,
    NhanVienComponent,
    EditNvComponent,
    QLVatTuComponent,
    EditAddComponentVatTu,
    QLPhieuNhapComponent,
    QLPhieuXuatComponent,
    EditAddPhieunhapComponent,
    EditAddPhieuxuatComponent,
    ListNCCComponent,
    EditAddNccComponent,


    
  ],
  providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: {siteKey:environment.recaptcha.siteKey,} as RecaptchaSettings,
}],
  bootstrap: [AppComponent]
})
export class AppModule { }

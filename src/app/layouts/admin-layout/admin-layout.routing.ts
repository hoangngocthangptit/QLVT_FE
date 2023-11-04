import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { RegistrationComponent } from 'app/auth/registration/registration.component';
import { LoginComponentComponent } from 'app/auth/login-component/login-component.component';
import { TableProductComponent } from 'app/components/table-product/table-product.component';
import { KhoComponent } from 'app/QLKho/kho/kho.component';
import { QLChiNhanhComponent } from 'app/QLCN/qlchi-nhanh/qlchi-nhanh.component';
import { QLVatTuComponent } from 'app/QLVatTu/qlvat-tu/qlvat-tu.component';
import { NhanVienComponent } from 'app/QLNV/nhan-vien/nhan-vien.component';
import { QLPhieuNhapComponent } from 'app/NVKho/qlphieu-nhap/qlphieu-nhap.component';
import { QLPhieuXuatComponent } from 'app/NVKho/qlphieu-xuat/qlphieu-xuat.component';
import { ListNCCComponent } from 'app/QLNCC/list-ncc/list-ncc.component';




export const AdminLayoutRoutes: Routes = [
  
    {path: 'login', component: LoginComponentComponent},
    {path: 'register', component: RegistrationComponent},
    { path: 'chi-nhanh',     component: QLChiNhanhComponent },
    { path: 'vat-tu',     component: QLVatTuComponent },
    { path: 'kho',        component: KhoComponent },
    { path: 'nhan-vien',      component: NhanVienComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    { path: 'phieu-nhap',     component: QLPhieuNhapComponent },
    { path: 'phieu-xuat',     component: QLPhieuXuatComponent },
    { path: 'nha-cung-cap',          component: ListNCCComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },

    // {path: 'list-product',       component: TableProductComponent},

];

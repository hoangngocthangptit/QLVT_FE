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


export const AdminLayoutRoutes: Routes = [
  
    {path: 'login', component: LoginComponentComponent},
    {path: 'register', component: RegistrationComponent},
    { path: 'table-list',     component: TableListComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    // {path: 'list-product',       component: TableProductComponent},

];
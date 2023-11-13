import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/chi-nhanh', title: 'Quản lí chi nhánh',  icon:'content_paste', class: '' },
    { path: '/kho', title: 'Quản lí kho',  icon:'unarchive', class: '' },
    { path: '/vat-tu', title: 'Quản lí vật tư',  icon:'content_paste', class: '' },
    { path: '/phieu-nhap', title: 'Quản lí phiếu nhập',  icon:'library_books', class: '' },
    { path: '/phieu-xuat', title: 'Quản lí phiếu xuất',  icon:'library_books', class: '' },
    { path: '/nhan-vien', title: 'Danh sách nhân viên',  icon:'person', class: '' },
    { path: '/nha-cung-cap', title: 'Nhà cung cấp',  icon:'unarchive', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.getRole();
  }
  getRole() {
   
    const isAdmin = localStorage.getItem('role') === "admin";

    if (localStorage.getItem('token') !== null && !isAdmin) {
      this.menuItems = ROUTES.filter(item => item.path === '/phieu-nhap' || item.path === '/phieu-xuat' ||  item.path ==='/vat-tu' ||  item.path ==='/dashboard');
    } else {
      this.menuItems = ROUTES.filter(item => item.path === '/chi-nhanh' || item.path === '/kho' ||  item.path ==='/typography' ||  item.path ==='/vat-tu' ||  item.path ==='/nhan-vien' || item.path === '/nha-cung-cap' ||  item.path ==='/dashboard');
    }
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}

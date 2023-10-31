import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  // { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/chi-nhanh', title: 'Quản lí chi nhánh', icon: 'content_paste', class: '' },
  { path: '/kho', title: 'Quản lí kho', icon: 'person', class: '' },
  { path: '/typography', title: 'List Product', icon: 'library_books', class: '' },
  { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
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
      this.menuItems = ROUTES.filter(item => item.path === '/icons');
    } else {
      this.menuItems = ROUTES.filter(item => item.path === '/chi-nhanh' || item.path === '/kho' ||  item.path ==='/typography');
    }
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}

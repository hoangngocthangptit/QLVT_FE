import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Router } from '@angular/router';
import { CrawlService } from 'app/Service/crawl.service';
import { TokenService } from 'app/Service/token.service';
import { event } from 'jquery';


@Component({
  selector: 'app-toolbar-user',
  templateUrl: './toolbar-user.component.html',
  styleUrls: ['./toolbar-user.component.scss']
})
export class ToolbarUserComponent implements OnInit {

  constructor(private token: TokenService,
              private route: Router, 
              private service:CrawlService    
  ) { }
  @Output() toggleEvent = new EventEmitter<boolean>();
  opened = false;




        name: any;
        id: any;
        isUser = false;
        isSeller = false;
        isAdmin = false;
        userId:any;
        role: string;
        length: any;
        bookName: string;
        
        link: string = '';
        totalItem;
        isbudget = false;
        isLogin = false;
        @Input() output: any;
        @Input() function: any;
        loading = false;

  ontoggel(input: any) {
    console.log('input' + input);
    this.toggleEvent.emit(input);
    this.opened = !this.opened;
  }
  ngOnInit(): void {
    this.name = localStorage.getItem('Name');
    this.role = localStorage.getItem('role');
    console.log('role check toolbar', this.role);
    if (this.role === 'admin') {
     this.isAdmin = true;
     this.isLogin = true;
   }
    if (this.role === 'seller') {
     this.isSeller = true;
     this.isLogin = true;
   }
    if (this.role === 'user') {
     this.isUser = true;
     this.isLogin = true;
     console.log('is user ', this.isUser);
   }
    }

 

    // crawl(){

      
    // this.service.crawl(this.link);

    
    // this.route.navigateByUrl('table-list');
    // }
    crawl(){
      this.loading = true;
      console.log("nhạn link",this.link);
      
    this.service.crawl(this.link).subscribe(
      response => {
        console.log('Crawl thành công:', response);
        localStorage.setItem('link',this.link);
        this.loading = false;
        this.route.navigateByUrl('table-list');
        // this.route.navigate(['/table-list'], { queryParams: { link: this.link } });
      },
      error => {
        this.loading = false;
        console.error('Lỗi khi crawl:', error);
      }
    );
    }
  
  logout(event: MouseEvent) {
    console.log('loggout function called');
    event.preventDefault();
    this.token.remove();
    this.token.logedIn(false);
    this.route.navigateByUrl('/login');
  }

}



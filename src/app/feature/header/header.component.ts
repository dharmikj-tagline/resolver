import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loading!:boolean;
  constructor(private spinner : NgxSpinnerService,private router:Router) { 
    router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.spinner.show();
      }else if(event instanceof NavigationEnd) {
        this.spinner.hide();
      }
    })
  }

  ngOnInit() {
  }

  getSpin(){
    this.spinner.show();
  }


}

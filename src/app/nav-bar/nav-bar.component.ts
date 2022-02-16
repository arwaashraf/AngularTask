import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    
  }
  onLogout(){
    localStorage.removeItem('user')
  }
 
}

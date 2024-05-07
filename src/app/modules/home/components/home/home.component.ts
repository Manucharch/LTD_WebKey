import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    if (localStorage.getItem('language') == null) {
      localStorage.setItem('language', 'ge');
    }
  }
}

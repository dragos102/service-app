import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.addToggleEventListener();
  }

  addToggleEventListener(): void {
    const navToggle = document.getElementById('nav-toggle');
    const navContent = document.getElementById('nav-content');

    navToggle?.addEventListener('click', () => {
      navContent?.classList.toggle('hidden');
    });
  }
}
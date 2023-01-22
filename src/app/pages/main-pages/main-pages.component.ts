import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-pages',
  templateUrl: './main-pages.component.html',
  styles: [
  ]
})
export class MainPagesComponent implements OnInit {

  year: number = new Date().getFullYear();
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/core/models/page.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements Page,OnInit {

  title = "Dashboard";

  constructor() { }

  ngOnInit(): void {
  }

}

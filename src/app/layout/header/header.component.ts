import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  headerBackgroundColor = environment.headerBackgroundColor;

  constructor() { }

  ngOnInit(): void {
  }

}

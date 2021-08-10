import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/core/models/page.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements Page,OnInit {

  title = "Systeminfo";

  constructor() { }

  ngOnInit(): void {
  }

}

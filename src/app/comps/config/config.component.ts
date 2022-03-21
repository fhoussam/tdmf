import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  intervals = ["M5", "M15", "H1", "H4"];

  constructor() { }

  ngOnInit(): void {
  }

}

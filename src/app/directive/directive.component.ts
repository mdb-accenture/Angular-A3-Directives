import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
})
export class DirectiveComponent implements OnInit {
  show: boolean = false;
  logs: number[] = [];

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.logs.push(this.logs.length + 1);
  }
}

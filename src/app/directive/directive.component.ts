import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
})
export class DirectiveComponent implements OnInit {
  show: boolean = false;
  // logs: number[] = [];
  logs: Date[] = [];

  constructor() {}

  ngOnInit() {}

  onClick() {
    // this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());
  }
}

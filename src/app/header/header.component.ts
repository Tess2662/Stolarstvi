import { Component, OnInit } from '@angular/core';
import {NAMES} from "../data";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  names: string[];
  numbers: number[];

  constructor() {
    this.names = NAMES;
    this.numbers = Array(5)
    for (let x = 0;x<6;x++) {
      this.numbers[x] = x;
    }
  }

  ngOnInit(): void {
  }

}

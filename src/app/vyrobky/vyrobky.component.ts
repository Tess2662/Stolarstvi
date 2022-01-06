import { Component, OnInit } from '@angular/core';
import {VyrobekGroup} from "../vyrobek-group";
import {VyrobkyService} from "../vyrobky.service";

@Component({
  selector: 'app-vyrobky',
  templateUrl: './vyrobky.component.html',
  styleUrls: ['./vyrobky.component.css']
})
export class VyrobkyComponent implements OnInit {
  // vyrobky?: VyrobekGroup[];
  vyrobky?: VyrobekGroup;


  constructor(private vyrobkyService: VyrobkyService) { }

  ngOnInit(): void {
    // this.vyrobky=this.vyrobkyService.getVyrobkyGroup();
    this.vyrobky = this.vyrobkyService.getVyrobky();
  }

}

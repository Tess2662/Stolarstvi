import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VyrobekGroup} from "../vyrobek-group";
import {VyrobkyService} from "../vyrobky.service"

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {
  vyrobky?: VyrobekGroup[];
  title: string = "";

  getGalerie(): void {

  }


  constructor(private route: ActivatedRoute, private vyrobekService: VyrobkyService) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get("id"));
    this.vyrobky = this.vyrobekService.getVyrobky(id);
    if (this.vyrobky.length > 0) {
      this.title = this.vyrobky[0]["name"];
    }


  }

}

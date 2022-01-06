import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {VyrobekGroup} from "../vyrobek-group";
import {VyrobkyService} from "../vyrobky.service"
import { Location} from "@angular/common";

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {
  vyrobky?: VyrobekGroup;
  title: string = "";

  constructor(private location: Location,private route: ActivatedRoute, private vyrobekService: VyrobkyService) { }

  showImage(thumbnail: string): void {

    window.location.href = thumbnail;
  }

  ngOnInit(): void {
    // to reload content after only id changes
    this.route.params.subscribe(params => {
      let id = Number(this.route.snapshot.paramMap.get("id"));
      this.vyrobky = this.vyrobekService.getVyrobky(id);
      this.title = this.vyrobky.name
    });
      }

}

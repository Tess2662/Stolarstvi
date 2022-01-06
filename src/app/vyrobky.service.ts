import { Injectable } from '@angular/core';
import {VyrobekGroup} from "./vyrobek-group";
import {Vyrobek} from "./vyrobek";
import {NAMES} from "./data";

@Injectable({
  providedIn: 'root'
})
export class VyrobkyService {


  getVyrobky(id?: number): VyrobekGroup {
    let names = NAMES;
    let delky = [12, 12, 6, 7, 3];
    let vyrobky: VyrobekGroup = {name: "Invalid", vyrobky: []}
    if (id == undefined) {
      vyrobky = {name: "Výrobky",vyrobky: []}
      for (let x=0;x<5;x++) {
        let name = "/assets/thumbnails/"+x+".jpg"
        // let name = "/assets/zidle/thumm.jpg"
        vyrobky["vyrobky"].push({id: x, name: names[x], thumbnail: name })
      }
    }
    //if id is valid
    else if (id < names.length) {
      vyrobky = {name: names[id],vyrobky: []}
      for (let x=0;x<delky[id];x++) {
        let name = "/assets/"+id+"/"+x+".jpg"
        // let name = "/assets/zidle/0.jpg"
        vyrobky["vyrobky"].push({id: x, name: names[x], thumbnail: name })
      }
    }
    return vyrobky;

}

  constructor() { }
}

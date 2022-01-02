import { Injectable } from '@angular/core';
import {VyrobekGroup} from "./vyrobek-group";
import {Vyrobek} from "./vyrobek";

@Injectable({
  providedIn: 'root'
})
export class VyrobkyService {

  getVyrobky(id?: number): VyrobekGroup[] {
    //return one piece of every vyrobek
    let columns = 3;
    let rows = 2;
    let names = ["Židle", "Stoly", "Schody","Dveře", "Kuchyně", "Ostatní"]
    let normalized = ["zidle","stoly","schody","dvere","kuchyne","ostatni"]

    let vyrobky: VyrobekGroup[] = [];
    //id counter
    let c = 0;
    if (id == undefined) {
      for (let i: number= 0;i<rows;i++) {
        vyrobky.push({vyrobky: [], name: "Výrobky"})

        for (let j: number = 0;j<columns;j++) {

          // /assets/thumbnails/....
          vyrobky[i]["vyrobky"].push({id: c,name: names[c],thumbnail: "/assets/zidle/0.jpg"});
          c++;
        }
      }
    }
    else if (id < normalized.length){
      for (let i =0;i<rows;i++) {
        let j = 0;
        vyrobky.push({vyrobky: [], name: names[id]})
        for (j;j<columns;j++) {
          let name = "/assets/zidle/0.jpg";
          if (id == 3 || id == 2) {
            name = "/assets/"+normalized[id]+"/"+(c)+".jpg"
          }
          // /assets/+normalized[c]+/....
          vyrobky[i]["vyrobky"].push({id:c, name: names[c],thumbnail: name})
          c++;
        }

      }
    }
    return vyrobky;
  }

  constructor() { }
}

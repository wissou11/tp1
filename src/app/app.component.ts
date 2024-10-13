import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadBarComponent } from "./head-bar/head-bar.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { Auto } from './auto';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadBarComponent, SearchBarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'showroom-auto';
  autoList: Auto[]=[
    {
      make: "Audi",
      model: "A3",
      price: 163,
      power: 6,
      photo: "assets/photos/a3.png",
      availability:11
    },
    {
      make: "Land Rover",
      model: "Range Rover Evoque",
      price: 290,
      power: 8,
      photo: "assets/photos/evoque.png",


availability  :4
    },
    {
      make: "Mercedes Benz",
      model: "GLA",
      price: 220,
      power: 8,
      photo: "assets/photos/gla.png",


availability  :9
    },
    {
      make: "Alfa Romeo",
      model: "Stelvio",
      price: 340,
      power: 18,
      photo: "assets/photos/stelvio.png",


availability  :11
    },
    {
      make: "BMW",
      model: "x2",
      price: 210,
      power: 8,
      photo: "assets/photos/two.jpg",


availability  :3
    },
    {
      make: "BMW",
      model: "x3",
      price: 360,
      power: 11,
      photo: "assets/photos/three.jpg",


availability  :6
    }
  ]

  selectedAuto:Auto|undefined
  updateAuto(auto:Auto){
    this.selectedAuto=auto
  }
}

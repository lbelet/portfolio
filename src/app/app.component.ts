import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'; // Assurez-vous du chemin

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule], // Importez HeaderComponent ici
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  backgroundZoomed = false;
  backgroundStyle = {
    'background-image': 'url("/assets/images/background.webp")',
    'background-repeat': 'no-repeat',
    'background-position': 'center center',
    'background-size': 'cover',
    'background-attachment': 'fixed'
  };

  constructor() {}

  ngOnInit() {}

  // zoomInDoor() {
  //   this.backgroundZoomed = !this.backgroundZoomed;
  //   this.backgroundStyle['background-size'] = this.backgroundZoomed ? '300%' : 'cover';
  // }
}


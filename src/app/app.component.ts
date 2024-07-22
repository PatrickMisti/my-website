import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatCard, MatCardFooter} from "@angular/material/card";
import {MatIconButton} from "@angular/material/button";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {OverviewComponent} from "./component/overview/overview.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, MatCardFooter, MatCard, MatIconButton, MatIcon, MatIconModule, OverviewComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  isBrightness: boolean = true;

  changeThemingColor(): void {
    document.getElementById('main')
      ?.classList.toggle('dark');
    this.isBrightness = !this.isBrightness;
  }
}

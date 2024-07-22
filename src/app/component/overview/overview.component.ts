import { Component } from '@angular/core';
import {PersonalComponent} from "../personal/personal.component";

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    PersonalComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}

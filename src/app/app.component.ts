import {Component, OnInit} from '@angular/core';
import {AppareilService} from './services/appareil.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {  }

  title = 'Mon premier projet Angular';

}

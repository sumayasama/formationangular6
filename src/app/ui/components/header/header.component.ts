import { Component, OnInit } from '@angular/core';
import { faBars, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
// icons
public  faBars = faBars;
public faUser = faUser;
// alt maj fleche down pour dupliquer une ligne
public faTimes = faTimes;

// param binded (car public)
public title: string;
public open = true;
// appeler avant :
  constructor() {}
  ngOnInit() {
    this.title = 'Meine Anwendung';
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-log-search',
  templateUrl: './log-search.component.html',
  styleUrls: ['./log-search.component.css']
})
export class LogSearchComponent {
  isFocused = false; // detecter si on veut faire une recherche
  zoneRechereche = ''; // la zone de recherche pour changer la couleur;
  
 
 onFocus(zone: string) {
    this.isFocused = true;
    this.zoneRechereche = zone;
  }

}

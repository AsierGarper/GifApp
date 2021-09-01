import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor (private gifservice: GifsService) {};

  // itemsHistorial: string[] = [];

  get historial() {
    return this.gifservice.historial;
  }

  // mostrarHistorial(){
  //   console.log('Mira el historial:');
  //   console.log(this.historial);
  // }

  
  

}

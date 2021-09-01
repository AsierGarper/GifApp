import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchGifsResponse, Images, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'RkmWI2yWs6l1cRYBCoYfYVLlRpYyvrMI'
  private _historial: string[] = [];

  //ToDo: Cambiar any por su tipo
  public resultados: Gif[] = [];


  get historial(){
    return [...this._historial];
  }

  constructor( private http: HttpClient){

  }
  buscarGifs( query: string) {

    query = query.trim().toLocaleLowerCase();
    if( !this._historial.includes( query)){
      this._historial.unshift(query);
      this._historial= this._historial.splice(0, 10)
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=RkmWI2yWs6l1cRYBCoYfYVLlRpYyvrMI&q=${query}&limit=10`)
    .subscribe((resp) => {
      console.log(resp.data);
      this.resultados = resp.data;
    });
   
    
  }
}

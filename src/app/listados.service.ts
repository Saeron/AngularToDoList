import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface phpResponse {
  message: String
}

@Injectable({
  providedIn: 'root'
})
export class ListadosService {

  constructor(private http: HttpClient) { }

  getLista(ramd: String): any {
    return this.http.post<phpResponse>('/api/getLista.php',{
      ramdon: ramd
    });
  }

  addLinea(ramdon: String, mensaje: String): any{
    return this.http.post<phpResponse>("api/addLinea.php",{
      rnd: ramdon,
      msg: mensaje
    });
  }

  marcar(id_line,marca){
    return this.http.post<phpResponse>("api/checkLine.php",{
      id: id_line,
      marc: marca
    });
  }
}

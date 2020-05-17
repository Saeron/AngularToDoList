import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ListadosService } from '../listados.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  ramdon: String;
  lista: any;
  mensaje: String;

  constructor(private route: ActivatedRoute,
    private listas: ListadosService) { }

  ngOnInit() {
    this.ramdon = this.route.snapshot.paramMap.get('id');
    this.listas.getLista(this.ramdon).subscribe(
      data => {
        if (data.message == "devolviendo array vacio") {
          console.log("Lista nueva");
        } else {
          this.lista = data
        }
      }
    );
  }

  addLine() {
    if (this.mensaje.length > 300 || this.mensaje=="") {
      alert("No puedes exeder los 300 caracteres o añadir un mensaje en blanco.");
    } else {
      this.listas.addLinea(this.ramdon, this.mensaje).subscribe(
        data => {
          console.log(data.message);
        }
      );
      this.listas.getLista(this.ramdon).subscribe(
        data => {
          this.lista = data
        }
      );
    }
    this.mensaje = "";
  }

  marcar(id) {
    this.listas.marcar(id, 1).subscribe(
      data => {
        console.log(data.message);
      }
    );
    this.listas.getLista(this.ramdon).subscribe(
      data => {
        this.lista = data
      }
    );
  }
}

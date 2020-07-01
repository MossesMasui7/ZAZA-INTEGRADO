import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ProductoService } from "../../services/producto.service";
@Component({
  selector: "app-busqueda",
  templateUrl: "./busqueda.component.html",
  styleUrls: ["./busqueda.component.scss"],
})
export class BusquedaComponent implements OnInit {
  constructor(public producto: ProductoService, public router: Router) {}

  ngOnInit() {}

  addNegocio() {
    this.router.navigate(["./agregar-tienda-producto"]);
  }
}

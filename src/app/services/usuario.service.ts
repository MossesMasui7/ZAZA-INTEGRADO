import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MyserviceService } from "./myservice.service";

@Injectable({
  providedIn: "root",
})
export class RegistroService {
  URL = "http://localhost:3000/api/usuario/";
  //URL = "http://192.168.1.79:3000/api/usuario/"
  constructor(private http: HttpClient, private cliente: MyserviceService) {}

  registrar(
    nombre: String,
    username: String,
    email: String,
    contrasena: String,
    img: String,
    telefono: String
  ) {
    return this.http
      .post(`${this.URL}registrar`, {
        nombre,
        username,
        email,
        contrasena,
        img,
        telefono,
      })
      .toPromise();
  }
  obtener(username: String) {
    return this.http
      .get(`${this.URL}verificar/username/${username}`)
      .toPromise();
  }

  actualizar(nombre: String, telefono: String, Img: any) {
    return this.http
      .put(`${this.URL}actualizar/${this.cliente.userID}`, {
        nombre,
        telefono,
        Img,
      })
      .toPromise();
  }

  buscar(usuario: String) {
    return this.http.get(`${this.URL}/buscar/${usuario}`).toPromise();
  }

  reset(email: any) {
    return this.http.get(`${this.URL}/resetpass/${email}`).toPromise();
  }
}

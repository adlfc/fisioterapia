import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  userList: User[] = [];

  user: User = new User(0,'','','','','','','',true);

  public getUsers()
  {
    return this.userService.getUsers().subscribe(results => this.userList = results);
  }

  public onSubmit(form)
  {
    if(form.valid)
    {
      var id = this.userList.length + 1;
      var nombre = form.controls.nombre.value;
      var apellidos = form.controls.apellidos.value;
      var ciudad = form.controls.ciudad.value;
      var telefono = form.controls.telefono.value;
      var email = form.controls.email.value;
      var usuario = form.controls.usuario.value;
      var password = form.controls.password.value;

      this.userService.addUser(new User(id, nombre, apellidos, ciudad, telefono, email, usuario, password, true)).subscribe();

    }
  }

}

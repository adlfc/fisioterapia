import { Component, OnInit } from '@angular/core';
import { User } from '../user';;
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
    this.getUserActual();
    this.user.nombre = this.userActual.nombre;
  }

  userList: User[] = [];

  userActual: User;

  user: User = new User(0,'','','','','','','',true);

  public getUsers()
  {
    this.userService.getUsers().subscribe(data => {this.userList = data});
  }

  public getUserActual()
  {
    this.userActual = new User(4,'Pepe','','','','','','',true);
  }

  public onSubmit(form)
  {
    console.log(form.controls.usuario.value);
  }

}

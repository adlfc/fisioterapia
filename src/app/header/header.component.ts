import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user-service.service';
import * as $ from 'jquery';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  user: User = new User(0,'','','','','','','',true);

  userList: User[] = [];

  login: boolean = false;

  actualUser;

  public getUsers()
  {
    return this.userService.getUsers().subscribe(results => this.userList = results);
  }

  public onSubmit(form)
  {
    var username = form.controls.usuario.value;
    var password = form.controls.password.value;

    if(form.valid)
    {
      this.userList.forEach(usuario => {
        if(usuario.usuario == username && usuario.password == password)
        {    
          this.actualUser = username;

          $('#spinner').append('<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>');

          setTimeout(function() {
            $('#modalAcceder').modal('hide');
          }, 500);

          this.login = true;
        }
        else
        {
          $('#error').empty();
          $('#error').append("<p class='text-danger'>Usuario y/o contraseña erróneos</p>");
        }
      });
    }
    else
    {
      console.log(form.controls.usuario.value);
      if((form.controls.usuario.value == "" || form.controls.usuario.value == null)  && (form.controls.password.value == "" || form.controls.password.value == null))
      {
        $('#error').empty();
        $('#error').append("<p class='text-danger'>Usuario y contraseña requeridos</p>");
      }
      else if(form.controls.usuario.value == "" || form.controls.usuario.value == null)
      {
        $('#error').empty();
        $('#error').append("<p class='text-danger'>Usuario requerido</p>");
      }
      else if(form.controls.password.value == "" || form.controls.password.value == null)
      {
        $('#error').empty();
        $('#error').append("<p class='text-danger'>Contraseña requerida</p>");
      }
    }
  }

  public resetAcceder()
  {
    $("#loginForm")[0].reset();
  }

  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
  public openNav() 
  {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  public closeNav() 
  {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

}

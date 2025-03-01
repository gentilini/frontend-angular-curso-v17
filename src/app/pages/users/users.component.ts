import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  userSelecionado: User | undefined

  userList: User[] = [
    {
      nome: 'Rafael',
      idade: 41
    },
    {
      nome: 'Franciele',
      idade: 30
    }
  ]

  receberDados(user: User) {
    this.userSelecionado = user;
  }
}

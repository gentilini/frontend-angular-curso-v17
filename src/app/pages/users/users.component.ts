import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  userList: User[] = [
    {
      nome: 'Rafael',
      idade:41
    },
    {
      nome: 'Franciele',
      idade: 30
    }
  ]

  receberDados(user: User) {
    console.log(user);
  }
}

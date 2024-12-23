import { Component, OnInit } from '@angular/core';
import { UserMdl } from 'src/app/model/User.model';
import { UsersService } from 'src/app/services/users.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.scss']
})
export class ListEmpComponent implements OnInit{
  
  public recuperUser: UserMdl[] = [];
  public imageBaseUrl = `${environment.UrlImages}`;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getAllUser().subscribe({
      next: (data: UserMdl[]) => {
        this.recuperUser = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des users:', err);
      },
    });
  }

  editUser(userId: string): void {
    console.log('Modifier l\'utilisateur avec ID:', userId);
  }

  deleteUser(userId: string): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      this.usersService.deleteUser(userId).subscribe({
        next: () => {
          this.recuperUser = this.recuperUser.filter(user => user.id !== userId);
        },
        error: (err) => {
          console.error(`Erreur lors de la suppression de l'utilisateur avec l'ID ${userId}:`, err);
        },
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { UserMdl } from 'src/app/model/User.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  employeForm: FormGroup;
  userId!: string;
  selectedFile: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private fb: FormBuilder
  ) {
    this.employeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{8,12}$/)]],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id')!;
    this.loadUser();
  }

  loadUser(): void {
    this.usersService.getUserById(this.userId).subscribe({
      next: (user: UserMdl) => {
        this.employeForm.patchValue({
          fullName: user.userName,
          email: user.email,
          phone: user.telephone,
          role: user.roleName,
          password: '',  // N'oubliez pas de ne pas pre-remplir le mot de passe pour des raisons de securite.
        });
      },
      error: (err) => {
        console.error('Erreur lors du chargement de l\'utilisateur:', err);
      }
    });
  }

  onSubmit(): void {
    if (this.employeForm.invalid) {
      alert('Veuillez remplir tous les champs correctement.');
      return;
    }

    const updatedUser: UserMdl = {
      id: this.userId,
      userName: this.employeForm.value.fullName,
      email: this.employeForm.value.email,
      telephone: this.employeForm.value.phone,
      motDePasse: this.employeForm.value.password,
      roleName: this.employeForm.value.role,
      profileImage: this.selectedFile,
    };

    const profileImage = this.selectedFile || null;

    this.usersService.updateUser(updatedUser, profileImage).subscribe({
      next: () => {
        this.router.navigateByUrl("Admin/GestionEmp/listeEmp");
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour de l\'utilisateur:', err);
      }
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }
}

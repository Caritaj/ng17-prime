import { Component } from '@angular/core';
import { InputComponent } from '../../shared/input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule, MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  loginForm!: FormGroup;

  educationLevels = [
    { id: 1, text: 'Primary' },
    { id: 2, text: 'Secondary' },
    { id: 3, text: 'Tertiary' }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
      id_level: [null, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
        console.log(this.loginForm.value);
    }
}
}
